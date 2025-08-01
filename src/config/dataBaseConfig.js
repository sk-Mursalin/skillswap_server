const mongoose = require("mongoose");

const dbConnection = async()=>{
    await mongoose.connect("mongodb+srv://skmursalin02:9378496506@learnmongo.lhejvp7.mongodb.net/skillSwap")
}

module.exports = dbConnection;