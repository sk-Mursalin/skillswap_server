const mongoose = require("mongoose");

const connectionSchema = mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId
    },
    toUser: {
        type: mongoose.Schema.Types.ObjectId
    },
    status:{
        type:String,
        enum:{
            values:['interested', 'ignored', 'accepted', 'rejectd'],
            message:"{value} is not a valid status",
        }
    }
});

const ConnectionModel = mongoose.model("Connectioin",connectionSchema)

module.exports = ConnectionModel