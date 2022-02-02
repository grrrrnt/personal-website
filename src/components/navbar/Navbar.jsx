import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import grant_logo from "../../img/navbar/grant_logo_white.png";
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    const isPortrait = window.innerHeight > window.innerWidth;

    const [education, setEducation] = useState(false);
    const [projects, setProjects] = useState(false);
    const [career, setCareer] = useState(false);
    const [skills, setSkills] = useState(false);
    const [more, setMore] = useState(false);

    const listenScrollEvent = (event) => {
        if (window.scrollY >= window.innerHeight * 4.8) {
            setEducation(false);
            setProjects(false);
            setCareer(false);
            setSkills(false);
            setMore(true);
        } else if (window.scrollY >= window.innerHeight * 3.8) {
            setEducation(false);
            setProjects(false);
            setCareer(false);
            setSkills(true);
            setMore(false);
        }  else if (window.scrollY >= window.innerHeight * 2.8) {
            setEducation(false);
            setProjects(false);
            setCareer(true);
            setSkills(false);
            setMore(false);
        } else if (window.scrollY >= window.innerHeight * 1.8) {
            setEducation(false);
            setProjects(true);
            setCareer(false);
            setSkills(false);
            setMore(false);
        } else if (window.scrollY >= window.innerHeight * 0.8) {
            setEducation(true);
            setProjects(false);
            setCareer(false);
            setSkills(false);
            setMore(false);
        } else {
            setEducation(false);
            setProjects(false);
            setCareer(false);
            setSkills(false);
            setMore(false);
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    });

    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                { !isPortrait && <div className="navbar-left">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} className="navbar-logo-button">
                        <img className="navbar-logo" src={grant_logo} alt=""/>
                    </Link>
                    {!isPortrait && <Icon className="socials-1" icon="akar-icons:linkedin-fill" onClick={() => { window.open("https://www.linkedin.com/in/grantleeyx/", "_blank") }} />}
                    {!isPortrait && <Icon className="socials-2" icon="akar-icons:github-fill" onClick={() => { window.open("https://github.com/grrrrnt", "_blank") }} />}
                    {!isPortrait && <Icon className="socials-3" icon="akar-icons:instagram-fill" onClick={() => { window.open("https://www.instagram.com/grrrr_nt", "_blank") }} />}
                    {!isPortrait && <Icon className="socials-4" icon="akar-icons:spotify-fill" onClick={() => { window.open("https://smarturl.it/music-by-grant", "_blank") }} />}
                </div> }
                <div className="navbar-right">
                    { isPortrait && 
                    <Link activeClass="active" to="intro" spy={true} smooth={true} className="navbar-logo-button">
                        <img className="navbar-logo" src={grant_logo} alt=""/>
                    </Link>
                    }
                    <h2 className={`navbar-right-item${education ? " onscreen" : ""}`}>
                        <Link activeClass="active" to="education" spy={true} smooth={true}>
                            Education
                        </Link>
                    </h2>
                    <h2 className={`navbar-right-item${projects ? " onscreen" : ""}`}>
                        <Link activeClass="active" to="projects" spy={true} smooth={true}>
                            Projects
                        </Link>
                    </h2>
                    <h2 className={`navbar-right-item${career ? " onscreen" : ""}`}>
                        <Link activeClass="active" to="career" spy={true} smooth={true}>
                            Career
                        </Link>
                    </h2>
                    <h2 className={`navbar-right-item${skills ? " onscreen" : ""}`}>
                        <Link activeClass="active" to="skills" spy={true} smooth={true}>
                            Skills
                        </Link>
                    </h2>
                    <h2 className={`navbar-right-item${more ? " onscreen" : ""}`}>
                        <Link activeClass="active" to="more" spy={true} smooth={true}>
                            More
                        </Link>
                    </h2>
                    <h2 className="navbar-blog-button">
                        <RouterLink to="/blog">
                            Blog
                        </RouterLink>
                    </h2>
                    { isPortrait && <h2 className="navbar-blog-button hidden">!</h2> }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
