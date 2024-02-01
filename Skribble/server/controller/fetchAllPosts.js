const Post = require("../model/post.js");
const fetchallposts = async (req, res) => {
  try {
    let allPosts = await Post.find({});
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = fetchallposts;
