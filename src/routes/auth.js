const express = require("express");
const { signupUser, loginUser, logoutUser } = require("../controllers/authController");
const { userAuth } = require("../middlewares/userAuth");
const authRoute = express.Router();

authRoute.post("/signup", signupUser);

authRoute.post("/login", loginUser);

authRoute.post("/logout", userAuth, logoutUser);

module.exports = authRoute;