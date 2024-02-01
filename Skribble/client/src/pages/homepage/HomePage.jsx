import React from "react";
import Navbar from "../../components/Navbar";
import home_wallpaer from "../../assets/homepage_wallpaper.jpg";
import option1 from "../../assets/walloption1.jpg";
import option2 from "../../assets/walloption2.jpg";
import "./homepage.css";
import { IoFilterCircle } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { MdScience } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdSportsFootball } from "react-icons/md";
import Posts from "../../components/postlist/Posts";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router";
const HomePage = () => {
  const { userName } = useContext(UserContext);
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();
  const [currfilter, setCurrFilter] = useState("All");
  const { filter, setFilter } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="banner_container">
          <img src={option2} alt="" className="banner_img" />
        </div>
        <div className="filters_section">
          <div
            className={`filter_div ${currfilter === "All" ? "active" : ""}`}
            onClick={() => {
              setCurrFilter("All");
              setFilter("All");
            }}
          >
            <IoFilterCircle className="icon" />
            All
          </div>
          <div
            className={`filter_div ${
              currfilter === "Entertainment" ? "active" : ""
            }`}
            onClick={() => {
              setCurrFilter("Entertainment");
              setFilter("Entertainment");
            }}
          >
            <RiMovie2Fill className="icon" />
            Entertainment
          </div>
          <div
            className={`filter_div ${currfilter === "Science" ? "active" : ""}`}
            onClick={() => {
              setCurrFilter("Science");
              setFilter("Science");
            }}
          >
            <MdScience className="icon" />
            Science
          </div>
          <div
            className={`filter_div ${
              currfilter === "Technology" ? "active" : ""
            }`}
            onClick={() => {
              setCurrFilter("Technology");
              setFilter("Technology");
            }}
          >
            <MdOutlinePhoneIphone className="icon" />
            Technology
          </div>
          <div
            className={`filter_div ${currfilter === "Sports" ? "active" : ""}`}
            onClick={() => {
              setCurrFilter("Sports");
              setFilter("Sports");
            }}
          >
            <MdSportsFootball className="icon" />
            Sports
          </div>
        </div>
      </div>
      <Posts />
      <Footer />
    </>
  );
};

export default HomePage;
