const express = require("express");
const bcrypt = require("bcrypt");
const { signupValidation } = require("../utils/validation");
const User = require("../models/user")
const authRoute = express.Router();

authRoute.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        signupValidation(req);
        const isEmailExist = await User.findOne({ email: email });
        if (isEmailExist) {
            throw new Error("email already exist please login!")
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashPassword
        });
        await user.save()
        res.status(201).json(" account created succesfully")

    } catch (err) {
        res.status(400).json(err.message)
    }
})

module.exports = authRoute;