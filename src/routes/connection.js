const express = require("express");
const connectionRouter = express.Router();
const { userAuth } = require("../middlewares/userAuth");
const { connectionRequest } = require("../controllers/connectionController");

connectionRouter.post("/connection/:status/:toUserId", userAuth, connectionRequest)

module.exports = connectionRouter