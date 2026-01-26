const express = require("express");
require("dotenv").config();
const createTables = require("./config/createtable.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

createTables();

app.listen(3000,()=>{
    console.log("server is running");
});