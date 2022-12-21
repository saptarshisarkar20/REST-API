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

app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);

    //* SAVING USING PROMISE
    user.save()
        .then(() => {
            res.status(201).send(user);
        })
        .catch((e) => {
            res.status(400).send(e);
        });

    // res.send("hello from");
});

app.listen(port, () => {
    console.log(`connected successful on port ${port}`);
});
