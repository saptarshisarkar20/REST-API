const express = require("express");

//* USING EXPRESS ROUTER
const router = new express.Router();

// //* IMPORTING MONGODB CONNECTION
// require("../db/conn");

//* IMPORTING OUT SCHEMA
const Student = require("../models/students");

router.get("/", (req, res) => {
    res.send("this is home page");
});

// router.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     //* SAVING USING PROMISE
//     user.save()
//         .then(() => {
//             res.status(201).send(user);
//         })
//         .catch((e) => {
//             res.status(400).send(e);
//         });

//     // res.send("hello from");
// });

//* CREATE STUDENTS DATA
router.post("/students", async (req, res) => {
    try {
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

//* GET ALL STUDENTS DATA
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        console.log(studentsData);
        res.send(studentsData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// //* GET INDIVIDUAL STUDENTS DATA BY ID
// router.get("/students/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         // res.send(_id);
//         const stuData = await Student.findById({ _id: _id });
//         if (!stuData) {
//             res.status(404).send();
//         } else {
//             res.send(stuData);
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

//* GET INDIVIDUAL STUDENTS DATA BY NAME
router.get("/students/:name", async (req, res) => {
    try {
        const _name = req.params.name;
        // res.send(_name);
        const stuName = await Student.find({ name: _name });
        if (!stuName) {
            res.status(404).send();
        } else {
            res.send(stuName);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

//* UPDATE STUDENTS DATA USING PATCH REQUEST
router.patch("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const studentUpdate = await Student.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        );

        res.send(studentUpdate);
    } catch (error) {
        res.status(404).send(error);
    }
});

//* DELETE STUDENTS BY ID
router.delete("/students/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const stuDelete = await Student.findByIdAndDelete({ _id: id });
        if (!stuDelete) {
            res.status(404).send();
        } else {
            res.send(stuDelete);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
