import React from "react";
import "./editblogpage.css";
import Navbar from "../../components/Navbar";
import CommentSection from "../../components/commentsection/CommentSection";
import Footer from "../../components/footer/Footer";
import { IoIosArrowDropdown } from "react-icons/io";
import authorimg from "../../assets/author.jpg";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const baseBlogPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  category: "",
  createdDate: "",
};
const EditBlogPage = () => {
  const [img, setImage] = useState(false);
  const [post, setPost] = useState(baseBlogPost);
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      //http://localhost:8000/blogdata
      //https://skribble-api.vercel.app
      fetch(`https://skribblebackend.onrender.com/blogdata/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data));
    };
    fetchData();
  }, []);
  useEffect(() => {
    const getImage = async () => {
      let responseData;
      let formData = new FormData();
      formData.append("newPost", img);

      if (img) {
        //API CALL TO UPLOAD THE IMAGE
        await axios
          //http://localhost:8000
          //https://skribble-api.vercel.app
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
    post.createdDate = Date.now();
  }, [img]);
  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
    // console.log(post);
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const updatePost = () => {
    if (localStorage.getItem("auth-token")) {
      //http://localhost:8000
      //https://skribble-api.vercel.app
      fetch(`https://skribblebackend.onrender.com/updatepost/${id}`, {
        method: "PUT",
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
        .then((data) => setPost(data));
      navigate(`/blogdata/${id}`);
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
              <option value="">
                <span>Blog Category</span>
              </option>
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
              value={post.title}
            />
          </div>
          <div className="create_blog_sub_info">
            <div className="create_blog_author_dets">
              <img src={authorimg} alt="" />
              <p>{post.username}</p>
            </div>
            <p className="create_blog_post_date">August 20, 2022</p>
          </div>
        </div>
        <div className="create_blog_banner_container">
          <div className="create_blog_banner_filler">
            {/* {img ? (
              <img src={post.picture} alt="ookok" />
            ) : (
              <h1>Hey man upload your image here</h1>
            )} */}
            <img src={post.picture} alt="ookok" className="create_blog_img" />
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
            id=""
            cols="130"
            rows="30"
            name="description"
            placeholder="write your mind here..."
            onChange={(e) => changeHandler(e)}
            value={post.description}
          ></textarea>
        </div>
        <div className="create_blog_btn_section">
          <button onClick={() => updatePost()}>
            <IoIosAddCircle className="create_post_icon" /> Update Blog
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditBlogPage;
