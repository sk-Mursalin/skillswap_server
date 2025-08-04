const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.status(401).json("user unauthorized");
        }
        const tokenVerify = jwt.verify(token, "937@msk");
        const _id = tokenVerify._id;
        const userData = await User.findOne({ _id: _id });
        if (!userData) {
            throw new Error("user not found")
        }

        req.userData = userData
        next()
    } catch (err) {
        res.status(400).json(err.message)
    }

}

module.exports = {
    userAuth
}