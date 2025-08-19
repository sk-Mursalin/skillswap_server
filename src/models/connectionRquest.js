const mongoose = require("mongoose");

const connectionSchema = mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    status: {
        type: String,
        enum: {
            values: ['interested', 'ignored', 'accepted', 'rejectd'],
            message: "{value} is not a valid status",
        },
        require: true
    }
}, { timeStamps: true });

const ConnectionModel = mongoose.model("Connectioin", connectionSchema)

module.exports = ConnectionModel