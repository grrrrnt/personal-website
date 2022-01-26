import React from 'react';
import "./Navbar.css"
import grant_logo from "../../img/grant_logo_white.png"
import { Icon } from '@iconify/react';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <button onClick={scrollToTop} className="navbar-logo-button">
                    <img className="navbar-logo" src={grant_logo} alt=""/>
                </button>
                <Icon className="socials-1" icon="akar-icons:linkedin-fill" onClick={() => { window.open("https://www.linkedin.com/in/grantleeyx/", "_blank") }} />
                <Icon className="socials-2" icon="akar-icons:github-fill" onClick={() => { window.open("https://github.com/grrrrnt", "_blank") }} />
                <Icon className="socials-3" icon="akar-icons:instagram-fill" onClick={() => { window.open("https://www.instagram.com/grrrr_nt", "_blank") }} />
                <Icon className="socials-4" icon="akar-icons:spotify-fill" onClick={() => { window.open("https://smarturl.it/music-by-grant", "_blank") }} />
            </div>
            <div className="navbar-right">
                <h2 className="navbar-right-item">Education</h2>
                <h2 className="navbar-right-item">Projects</h2>
                <h2 className="navbar-right-item">Career</h2>
                <h2 className="navbar-right-item">Skills</h2>
                <h2 className="navbar-right-item">Blog</h2>
                <h2 className="navbar-right-item">Contact</h2>
                <h2 className="navbar-right-item">More</h2>
            </div>
        </div>
    </nav>);
};

export default Navbar;
