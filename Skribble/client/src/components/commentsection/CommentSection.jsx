import React from "react";
import "./commentsection.css";
import authorimg from "../../assets/author.jpg";
import { MdDelete } from "react-icons/md";
const CommentSection = () => {
  return (
    <div className="comment_section">
      <p className="comments_sec_heading">Comments</p>
      <div className="comment_div">
        <div className="commenter_info">
          <img src={authorimg} alt="" className="commenter_info_img" />
          <p className="commenter_info_name">Jhon cena</p>
        </div>
        <p className="comment_data">
          I just tried this recipe and it was amazing! The instructions were
          clear and easy to follow, and the end result was delicious. I will
          definitely be making this again. Thanks for sharing!
        </p>
        <div className="comment_actions">
          <button className="add_comment_btn">Comment</button>

          <MdDelete className="comment_del_icon" />
        </div>
      </div>
      <div className="comment_div">
        <div className="commenter_info">
          <img src={authorimg} alt="" className="commenter_info_img" />
          <p className="commenter_info_name">Jhon cena</p>
        </div>
        <p className="comment_data">
          <textarea className="comment_enter" rows="4" cols="140">
            {" "}
          </textarea>
        </p>
        <div className="comment_actions">
          <button className="add_comment_btn">Comment</button>

          <MdDelete className="comment_del_icon" />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
