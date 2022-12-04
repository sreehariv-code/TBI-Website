import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav id="navbar" className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Event</Link>
      </nav>
    </header>
  );
};

export default Header;
