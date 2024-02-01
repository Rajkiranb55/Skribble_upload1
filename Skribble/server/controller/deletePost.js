const Post = require("../model/post.js");
const deletePost = async (req, res) => {
  try {
    const blog = await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).json("post deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = deletePost;
