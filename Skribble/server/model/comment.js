const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: { type: String, required: true },
  postId: { type: String, required: true },
  date: { type: String },
  comments: { type: String, required: true },
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;
