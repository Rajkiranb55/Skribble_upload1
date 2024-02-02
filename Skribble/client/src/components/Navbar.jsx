import React from "react";
import "./navbar.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isUserAUthenticated }) => {
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("auth-token", "");
    navigate("/");
    isUserAUthenticated(false);
  };
  return (
    <div className="navbar">
      <div>
        <p>Skribble</p>
      </div>

      <ul className="nav_list">
        <Link className="link" to="/home">
          <li>Home</li>
        </Link>
        <Link className="link" to="/about">
          <li>About</li>
        </Link>
        {/* <Link className="link" to="/createblog">
          <li>Contact</li>
        </Link> */}

        <Link className="link" to="/createblog">
          <li className="create_post_item">
            <IoMdAddCircle className="icon" />
            Create Post
          </li>
        </Link>
        <li>
          <div className="user_profile">
            <FaCircleUser className="icon" />
            {userName ? userName : "User Name"}
          </div>
        </li>
        <Link className="link">
          <li onClick={() => handleLogout()}>Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
