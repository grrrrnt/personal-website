import React from 'react';
import "./Navbar.css"
import grant_logo from "../../img/grant_logo_white.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <img className="navbar-logo" src={grant_logo} alt=""/>
            </div>
            <div className="navbar-right">
                <h2 className="navbar-right-item">Education</h2>
                <h2 className="navbar-right-item">Projects</h2>
                <h2 className="navbar-right-item">Career</h2>
                <h2 className="navbar-right-item">Skills</h2>
                <h2 className="navbar-right-item">Blog</h2>
                <h2 className="navbar-right-item">Contact</h2>
            </div>
        </div>
    </nav>);
};

export default Navbar;
