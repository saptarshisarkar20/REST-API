const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
app.use(express.json());

//TODO: TO BE CONTINUED AFTER LEARNING EXPRESS JS
//? YOUTUBE LINK HERE
//! https://www.youtube.com/playlist?list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa
//* CLOSING NOW

//* RESTARTING ON 21ST DECEMBER

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("this is home page");
});

// app.post("/students", (req, res) => {
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
app.post("/students", async (req, res) => {
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
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        console.log(studentsData);
        res.send(studentsData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// //* GET INDIVIDUAL STUDENTS DATA BY ID
// app.get("/students/:id", async (req, res) => {
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
app.get("/students/:name", async (req, res) => {
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
app.patch("/students/:id", async (req, res) => {
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
app.delete("/students/:id", async (req, res) => {
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

app.listen(port, () => {
    console.log(`connected successful on port ${port}`);
});
