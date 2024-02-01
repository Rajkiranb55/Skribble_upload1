const Post = require("../model/post.js");
const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404).json({ msg: "Post not found" });
  }
  const result = await Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body.post,
    },
    { new: true }
  );

  return res.status(200).json(result);
};

module.exports = updatePost;
