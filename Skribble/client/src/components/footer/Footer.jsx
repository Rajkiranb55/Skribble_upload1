import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_sec1">
        <p>Subscribe to stay tuned for new web-design and latest updates.</p>
      </div>
      <div className="footer_sec2">
        <div className="foot_sec2_div1">
          <input type="text" className="subs_input" />
        </div>
        <button className="subs_btn">Subscribe</button>
      </div>
      <div className="developed_by">
        <p>Developed By @RajKiranB</p>
      </div>
    </div>
  );
};

export default Footer;
