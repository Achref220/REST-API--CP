const express = require("express");

const app = express();

app.use(express.json());

const connectDB = require('./config/connectDB');

require("dotenv").config();

const routes = require('./route/UserRoute');

connectDB();

app.use("/api/user", routes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



