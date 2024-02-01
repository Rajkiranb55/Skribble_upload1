const multer = require("multer");

const uploadImage = async (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:8000/images/${req.file.filename}`,
  });
};

module.exports = uploadImage;
