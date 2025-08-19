const ConnectionModel = require("../models/connectionRquest");
const UserMOdel = require("../models/user");
const { connectionStatusValidation } = require("../utils/validation")

const connectionRequest = async (req, res) => {
    try {
        connectionStatusValidation(req)
        const { status, toUserId } = req.params;
        const { _id } = req.userData

        const targetUserExist = await UserMOdel.findOne({ _id: toUserId });
        if (!targetUserExist) {
            throw new Error("target user is not exist")
        }
        if (_id.toString() === toUserId) {
            throw new Error("can't send request to yourself")
        }

        const isConnectionExist = await ConnectionModel.findOne({
            $or: [
                {
                    $and: [
                        { fromUser: _id },
                        { toUser: toUserId }
                    ]
                },

                {
                    $and: [
                        { fromUser: toUserId },
                        { toUser: _id }
                    ]
                }
            ]
        });

        if (isConnectionExist) {
            throw new Error("connection request already exist ")
        }
        const connectionRequest = ConnectionModel({
            status,
            toUser: toUserId,
            fromUser: _id
        });

        await connectionRequest.save();
        res.status(201).json({ message: `you send friend requst to ${targetUserExist.lastName}` })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { connectionRequest }