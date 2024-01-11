import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header id="header">
        <div className="header_area">
          <div className="header_container">
            <div className="header_title">
              <h1>
                <Link to="/">Floral Studio</Link>
              </h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Add</Link>
                </li>
                <li>
                  <Link>Portfolio</Link>
                </li>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
