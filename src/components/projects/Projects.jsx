import "./Projects.css";
import React from 'react';
import soc_logo from "../../img/nus-soc-logo-white.png";
import { Link } from 'react-scroll';
import intro_prev from "../../img/ui/chevron_up.png";
import intro_next from "../../img/ui/chevron_down.png";

const Projects = () => {
    return (
        <div className="projects">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="education" spy={true} smooth={true}>
                    <img className="prev-next-img" src={intro_prev} alt=""/>
                </Link>
            </div>
            <div className="projects-wrapper">
                <div className="in-development">
                    <h2>In development... Stay tuned!</h2>
                </div>
            </div>
            <div className="next">
                <Link activeClass="active" to="career" spy={true} smooth={true}>
                    <img className="prev-next-img" src={intro_next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Projects