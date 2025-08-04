const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { signupValidation, loginValidation } = require("../utils/validation");
const User = require("../models/user")

const signupUser = async (req, res) => {
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
        res.status(201).json({ message: "account created succesfully" });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        loginValidation(req);
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("please create an account  before login!")
        }
        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
            throw new Error("password is wrong");
        }

        const token = jwt.sign({ _id: user._id }, "937@msk");
        res.cookie("token", token, { maxAge: 2 * 24 * 60 * 60 * 1000 })
        res.status(200).json({ message: "welcome to skillswap" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const logoutUser = (req, res) => {
    res.cookie("token", "", {maxAge: 0});
    res.status(200).json({ message: "logout successfully!" })
}

module.exports = {
    signupUser,
    loginUser,
    logoutUser
}