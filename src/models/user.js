const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not defined"
        }
    },

    age: {
        type: Number,
        min: 18
    },

    skillsWantLearn: {
        type: [String]
    },
    skillsCanTeach: {
        type: [String]
    },
    photoUrl: {
        type: String
    },
    availability: {
        type: [String]
    }
}, { timeStamps: true });

const UserMOdel = mongoose.model("User", userSchema);

module.exports = UserMOdel