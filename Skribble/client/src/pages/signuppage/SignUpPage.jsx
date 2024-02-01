import React from "react";
import { useState } from "react";
import "./signuppage.css";
import img from "../../assets/signup-page.jpg";
import LoginPage from "../loginpage/LoginPage";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
const SignUpPage = ({ isUserAUthenticated }) => {
  const [account, setAccount] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const { setUserName } = useContext(UserContext);

  const changeHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async () => {
    console.log("signing in", formData);
    let responseData;
    axios
      .post("http://localhost:8000/signup", formData)
      .then(({ data }) => {
        // console.log(data);
        responseData = data;
      })
      .catch(({ response }) => {
        // console.log(response);
      });
    // console.log(responseData);
  };

  ///////////
  const handleLogin2 = async () => {
    let data;
    await axios
      .post("http://localhost:8000/loginuser", formData)
      .then((response) => (data = response.data))
      .catch((error) => console.log(error));

    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      setUserName(data.userName);
      navigate("/home");
      isUserAUthenticated(true);
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="signup_page">
      {/* <div className="base_nav">
        <p>Skribble</p>
      </div> */}

      <div className="singup_and_pic_section">
        <div className="intro_pic_div">
          <div className="intro_pic_div_sec1">
            <p className="your_welcome">Welcome to</p>
            <p className="comp_name">Skribble</p>
          </div>
          <div className="intro_pic_div_sec2">
            <p>
              Here, we believe that building a strong konwledge network begins
              with your participation.
            </p>
          </div>
          <div className="intro_pic_div_sec3">
            <img src={img} alt="" />
          </div>
        </div>
        {account === "login" ? (
          <div className="sign_up_div">
            <p className="create_account_p">Login</p>

            <div className="input_div">
              <input
                type="email"
                placeholder="you@domain.com"
                name="email"
                value={formData.email}
                onChange={changeHandeler}
              />
            </div>
            <div className="input_div">
              <input
                type="password"
                placeholder="........"
                name="password"
                value={formData.password}
                onChange={changeHandeler}
              />
            </div>

            <div className="sign_up_btn" onClick={handleLogin2}>
              <span>Sign In</span>
            </div>

            <div className="continue_with">
              <p>
                Don't have an account?{" "}
                <span
                  className="login_span"
                  onClick={() => setAccount("signup")}
                >
                  Create One
                </span>
              </p>
            </div>
            <div className="dummy_data_div">
              <div>
                <p>Use this dummy login </p>
              </div>
              <div>
                <p>
                  E-mail: <span className="dum_dum"> rajone@gmail.com</span> &
                  Password: <span className="dum_dum">RajOne_1</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="sign_up_div">
            <p className="create_account_p">Create an account</p>
            <div className="input_div">
              <input
                type="text"
                placeholder="What should we call you ?"
                name="name"
                value={formData.name}
                onChange={changeHandeler}
              />
            </div>
            <div className="input_div">
              <input
                type="email"
                placeholder="you@domain.com"
                name="email"
                value={formData.email}
                onChange={changeHandeler}
              />
            </div>
            <div className="input_div">
              <input
                type="password"
                placeholder="........"
                name="password"
                value={formData.password}
                onChange={changeHandeler}
              />
            </div>

            <div
              className="sign_up_btn"
              onClick={() => {
                handleSignup();
              }}
            >
              <span>Sign Up</span>
            </div>

            <div className="continue_with">
              <p>
                Already have an account?{" "}
                <span
                  className="login_span"
                  onClick={() => setAccount("login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
