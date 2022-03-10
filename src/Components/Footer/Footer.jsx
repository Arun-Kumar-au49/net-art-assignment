import React from "react";
import "./Footer.scss";
import { FaGlobe, FaFacebook, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <ul className="social-media-links">
          <li>
            <span className="social-media-icon icon-tollfree"><FaPhoneAlt/> </span>
            <a href="#">Tollfree 18002001234</a>
          </li>
          <li>
            <span className="social-media-icon icon-facebook"> <FaFacebook /></span>
            <a href="https://facebook.com/cripumps" target="_blank">www.facebook.com/cripumps</a>
          </li>
          <li>
            <span className="social-media-icon icon-internet">< FaGlobe /> </span>
            <a href="https://crigroups.com" target="_blank">www.crigroups.com</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
