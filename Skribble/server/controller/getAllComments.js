const Comment = require("../model/comment.js");

const getAllComments = async (req, res) => {
  try {
    const allCommnets = await Comment.find({ postId: req.params.id });

    res.status(200).json(allCommnets);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getAllComments;
