const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const mutualMatch = require("../controllers/matchMakingController");
const matchRouter = express.Router();

matchRouter.get("/mutual", userAuth, mutualMatch)