const express = require("express");

//* IMPORTING MONGODB CONNECTION
require("./db/conn");

//* IMPORTING OUT SCHEMA
const Student = require("./models/students");

//* IMPORTING ROUTES
const studentRouter = require("./router/students");

//* USING EXPRESS
const app = express();

//TODO: TO BE CONTINUED AFTER LEARNING EXPRESS JS
//? YOUTUBE LINK HERE
//! https://www.youtube.com/playlist?list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa
//* CLOSING NOW

//? RESTARTING ON 21ST DECEMBER

//* ASSIGNING PORT NUMBER
const port = process.env.PORT || 8000;

app.use(express.json());

//* ASSIGNING EXPRESS ROUTER
app.use(studentRouter);

app.listen(port, () => {
    console.log(`connected successful on port ${port}`);
});
