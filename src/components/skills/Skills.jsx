import "./Skills.css";
import React from 'react';
import { Link } from 'react-scroll';
import prev from "../../img/ui/chevron_up.png";
import next from "../../img/ui/chevron_down.png";

const Skills = () => {
    return (
        <div className="skills">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="career" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="skills-wrapper">
                <div className="in-development">
                    <h2>In development... Stay tuned!</h2>
                </div>
            </div>
            <div className="next">
                <Link activeClass="active" to="more" spy={true} smooth={true}>
                    <img className="prev-next-img" src={next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Skills