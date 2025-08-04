const express = require("express");
const dbConnection = require("./config/dataBaseConfig");
const authRoute = require("./routes/auth");
const app = express();

app.use(express.json());
app.use("/",authRoute);



dbConnection().then(() => {
    console.log("db connection is successfully made");
    app.listen(5000, () => {
        console.log("app is running on port 5000....");
    });
}).catch(() => {
    console.log("db connection failed");
})
