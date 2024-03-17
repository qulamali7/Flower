import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer_container">
          <div className="footer_content">
            <div  className="footer_content_inputs">
                <div className="footer_img">
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                </div>
                <div className="footer_input">
                    <input type="text" placeholder="Your Email" />
                    <button>SEND</button>
                </div>
            </div>
            <div className="footer_about">
              <h4>About</h4>
              <ul>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Our Partners</Link>
                </li>
                <li>
                  <Link>Our Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer_contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <Link>Contact us</Link>
                </li>
                <li>
                  <Link>FAQ Page</Link>
                </li>
                <li>
                  <Link>About Me</Link>
                </li>
              </ul>
            </div>
            <div className="footer_follow">
                <h4>Follow Us</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
