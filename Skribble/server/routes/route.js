const express = require("express");
const signUpUser = require("../controller/sign_up_controller");
const login = require("../controller/login_controller.js");
const uploadImg = require("../controller/upload_image.js");
const router = express.Router();
const fetchAllPosts = require("../controller/fetchAllPosts.js");
const getBlogData = require("../controller/getBlogData.js");
const updatePost = require("../controller/updatePost.js");
const deletePost = require("../controller/deletePost.js");
const addComment = require("../controller/addComment.js");
///base get
// router.get("/", (req, res) => {
//   console.log("We have successfully started routing");
//   res.send("We have successfully started routing");
// });

const auth = require("../middleware/auth.js");

const corsAuth = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
};

router.post("/signup", corsAuth, signUpUser);
router.post("/loginuser", corsAuth, login);
router.get("/allposts", fetchAllPosts);
router.get("/blogdata/:id", getBlogData);
router.put("/updatepost/:id", auth, updatePost);
router.delete("/deletepost/:id", auth, deletePost);
router.post("/addcomment", auth, addComment);
router.get("/allcomments/:id");
///to create a post

const createpost = require("../controller/createpost.js");

router.post("/createpost", auth, createpost);

//////////////////////////
//for uploading image
const path = require("path");
const multer = require("multer");

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

router.post("/upload", upload.single("newPost"), uploadImg);
/////////////////////////////

module.exports = router;
