const Comment = require("../model/comment.js");
const addComment = async (req, res) => {
  try {
    const newComment = await new Comment(req.body);
    newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = addComment;
