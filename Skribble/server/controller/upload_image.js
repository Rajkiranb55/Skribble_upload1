const multer = require("multer");
const dotenv = require("dotenv").config();
const port = process.env.API_URL;
const uploadImage = async (req, res) => {
  res.json({
    success: 1,
    image_url: `https://skribble-frontend.vercel.app/${req.file.filename}`,
  });
};

module.exports = uploadImage;
