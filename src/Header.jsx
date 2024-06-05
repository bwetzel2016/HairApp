import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="page1">Gallery</Link>
        </li>
        <li>
          <Link to="page2">Appoitments</Link>
        </li>
        <li>
          <Link to="page3">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
