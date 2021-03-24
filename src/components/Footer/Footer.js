import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__data">
        <div className="footer__dataItem">
          <h5>About</h5>
          <p>Company</p>
          <p>Team</p>
          <p>Legacy</p>
        </div>
        <div className="footer__dataItem">
          <h5>Quick Links</h5>
          <p>Buy</p>
          <p>Sell</p>
          <p>Login</p>
        </div>
        <div className="footer__dataItem">
          <h5>Find Us</h5>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>

      <p>© 2021 World Class Real Estate All Rights Reserved</p>
    </div>
  );
};

export default Footer;
