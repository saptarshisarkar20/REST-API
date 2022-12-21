const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already registered"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email ID");
            }
        },
    },
    phone: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 99999999999,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
});

//* CREATING NEW COLLECTION
const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;
