const mongoose = require("mongoose");
const validator = require("validator");
require("../databaseconnection/connection");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "this id is all ready present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email is invalid.....");
            }
        }
    },
    phone: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
})


const userModel = new mongoose.model("userModel", userSchema);

module.exports = userModel;

