// all libraries required for the projct are imported here
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
// const cors = require("cors");
const dotenv = require("dotenv").config();

///////////////////////
//POST WHERE WE WILL RUN OUR APP
// const PORT = "https://skribblebackend.onrender.com";
const PORT = process.env.API_URL;

//////////////////
//creating an express app

const app = express();

/////////////////////////

//to be able to parse JSON data
app.use(express.json());

//////////////
const cors = require("cors");
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://skribble-api.vercel.ap"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

//
// const corsOpts = {
//   origin: "https://skribble-frontend.vercel.app",
//   credentials: true,
//   methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
//   allowedHeaders: ["auth-token", "Content-Type"],
//   // exposedHeaders: ["auth-token", "Content-Type"],
// };
// app.use(cors(corsOpts));

//////////////
// server.use(
//   cors({
//     origin: ["https://skribble-frontend.vercel.app"],
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

//https://skribble-frontend.vercel.app/

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

/////upload image to server using multer
const path = require("path");

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

server.use("/images", express.static("upload/images"));

server.post("/upload", upload.single("newPost"), (req, res) => {
  res.json({
    success: 1,
    image_url: `https://skribble-frontend.vercel.app/${req.file.filename}`,
  });
});
