// all libraries required for the projct are imported here
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv").config();

///////////////////////
//POST WHERE WE WILL RUN OUR APP
const PORT = 8000;

//////////////////
//creating an express app

const app = express();

/////////////////////////

//to be able to parse JSON data
app.use(express.json());

//////////////

app.use(cors());

//////////////

//Need to import all the setup routes to let teh server use them

const Router = require("./routes/route.js");

app.use("/", Router);
app.use("/images", express.static("upload/images"));
/////////////
//getting the credential from environment variable and connecting to the DB

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

//now connecting to DB
const DbConnection = require("./database/Db.js");

DbConnection(username, password);
/////////////////
///STARTING THE SERVER

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
