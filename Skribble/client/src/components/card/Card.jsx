import React from "react";
import "./card.css";
import img1 from "../../assets/cardimg1.jpg";
import authorimg from "../../assets/author.jpg";
const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className="card">
      <img src={data.picture} alt="" className="card_img" />
      <div className="card_content">
        <div className="category_div">
          <p className="category">{data.category}</p>
        </div>

        <p className="card_heading">{data.title}</p>
        <div className="author_data_div">
          <div className="author_dets">
            <img src={authorimg} alt="" />
            <p>{data.username}</p>
          </div>
          <p className="post_date">{data.createdDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
