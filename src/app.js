const express = require("express");
const cookieParser = require("cookie-parser")
const dbConnection = require("./config/dataBaseConfig");
const authRoute = require("./routes/auth");
const profileRouter = require("./routes/profile");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
app.use("/", profileRouter);



dbConnection().then(() => {
    console.log("db connection is successfully made");
    app.listen(5000, () => {
        console.log("app is running on port 5000....");
    });
}).catch(() => {
    console.log("db connection failed");
})
