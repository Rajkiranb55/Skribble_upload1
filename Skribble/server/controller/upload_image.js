const multer = require("multer");
const dotenv = require("dotenv").config();
const port = process.env.API_URL;
const uploadImage = async (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:8000/${req.file.filename}`,
  });
};

module.exports = uploadImage;
