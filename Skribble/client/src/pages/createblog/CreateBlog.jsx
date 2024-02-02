import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import "./createblog.css";
import { IoIosArrowDropdown } from "react-icons/io";
import authorimg from "../../assets/author.jpg";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const baseBlogPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  category: "",
  createdDate: new Date().toDateString(),
};
const CreateBlog = () => {
  const [post, setPost] = useState(baseBlogPost);
  const [image, setImage] = useState(false);
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getImage = async () => {
      let responseData;
      let formData = new FormData();
      formData.append("newPost", image);

      if (image) {
        //API CALL TO UPLOAD THE IMAGE

        //https://skribble-api.vercel.app
        //http://localhost:8000
        await axios
          .post("https://skribblebackend.onrender.com/upload", formData)
          .then((response) => (responseData = response.data))
          .then((error) => console.log(error));

        if (responseData.success) {
          console.log(responseData.image_url);
          post.picture = responseData.image_url;
          console.log(post);
        }
      }
    };
    getImage();
    post.username = userName;
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  }, [image]);

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const savePost = async () => {
    if (localStorage.getItem("auth-token")) {
      //http://localhost:8000
      //https://skribble-api.vercel.app
      fetch("https://skribblebackend.onrender.com/createpost", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: post,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      navigate("/home");
    } else {
      console.log("kuch toh gadbad hai bhai");
    }
  };
  return (
    <div className="create_blog_page">
      <Navbar />
      <div className="create_post_container">
        <div className="create_post_info_sec">
          <div className="create_post_category_div">
            <select
              className="create_post_category_dropdown"
              onChange={changeHandler}
              name="category"
              value={post.category}
            >
              <option value="">Blog Category</option>
              <option value="Science">Science</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className="create_post_heading_sec">
            <p>Enter your heading here:</p>
            <input
              type="text"
              className="create_post_heading_input"
              name="title"
              id=""
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="create_blog_sub_info">
            <div className="create_blog_author_dets">
              <img src={authorimg} alt="" />
              <p>{userName}</p>
            </div>
            <p className="create_blog_post_date">{post.createdDate}</p>
          </div>
        </div>
        <div className="create_blog_banner_container">
          <div className="create_blog_banner_filler">
            {image ? (
              <img src={post.picture} alt="ookok" className="create_blog_img" />
            ) : (
              <h1>Hey man upload your image here</h1>
            )}
          </div>
          <div className="upload_icon_div">
            <label>
              <IoIosAddCircle className="add_image_icon" />
            </label>
            <input type="file" onChange={imageHandler} />
          </div>
        </div>
        <div className="create_blog_data_container">
          <p>Enter your content here:</p>
          <textarea
            name="description"
            id=""
            cols="130"
            rows="30"
            onChange={(e) => changeHandler(e)}
            placeholder="whats on your mind..."
          ></textarea>
        </div>
        <div className="create_blog_btn_section">
          <button onClick={() => savePost()}>
            <IoIosAddCircle className="create_post_icon" /> Create Blog
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
