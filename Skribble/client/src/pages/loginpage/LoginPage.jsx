import React from "react";
import "./loginpage.css";
const LoginPage = () => {
  return (
    <div className="sign_up_div">
      <p className="create_account_p">Login</p>

      <div className="input_div">
        <input type="email" placeholder="you@domain.com" name="email" />
      </div>
      <div className="input_div">
        <input type="password" placeholder="........" name="password" />
      </div>
      <div className="sign_up_btn">
        <span>Sign In</span>
      </div>
      <div className="continue_with">
        <p>
          Don't have an account? <span className="login_span">Create One</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
