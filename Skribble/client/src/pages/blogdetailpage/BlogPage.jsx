import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import img1 from "../../assets/cardimg1.jpg";
import authorimg from "../../assets/author.jpg";
import Footer from "../../components/footer/Footer";
import "./blogpage.css";
import CommentSection from "../../components/commentsection/CommentSection";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const BlogPage = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { userName } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      //http://localhost:8000
      //https://skribble-api.vercel.app
      fetch(`https://skribblebackend.onrender.com/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    };
    fetchData();
  }, []);
  return (
    <div className="blogpage">
      <Navbar />
      <div className="blog_container">
        <div className="blog_info_sec">
          <div className="category_div">
            <p className="category">Technology</p>
          </div>
          <div className="blog_heading_sec">
            <p className="blog_heading">{post.title}</p>
          </div>
          <div className="blog_sub_info">
            <div className="author_dets">
              <img src={authorimg} alt="" />
              <p>{post.username}</p>
            </div>
            <p className="post_date">August 20, 2022</p>
          </div>
        </div>
        <div className="blog_banner_container">
          <img src={post.picture} alt="" className="banner_img" />
        </div>
        <div className="blog_data_container">
          <p>{post.description}</p>
        </div>
        {userName === post.username ? (
          <div className="edit_blog_btn_section">
            <Link to={`/updatepost/${post._id}`} className="link">
              <button>
                <MdEdit className="edit_icon" /> Edit Blog
              </button>
            </Link>
            <button>
              <MdDelete className="edit_icon" />
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <CommentSection />

      <Footer />
    </div>
  );
};

export default BlogPage;
