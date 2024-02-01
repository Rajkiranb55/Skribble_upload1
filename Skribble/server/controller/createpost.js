const Post = require("../model/post.js");
const createPost = async (req, res) => {
  let userData = req.user;
  try {
    let post = new Post(req.body.post);
    console.log(post);
    post.save();
    return res.status(200).json("Post saved succefully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = createPost;
