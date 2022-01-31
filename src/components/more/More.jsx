import "./More.css";
import React from 'react';
import { Link } from 'react-scroll';
import prev from "../../img/ui/chevron_up.png";
import next from "../../img/ui/chevron_down.png";

const More = () => {
    return (
        <div className="more">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="skills" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="more-wrapper">
                <div className="in-development">
                    <h2>In development... Stay tuned!</h2>
                </div>
            </div>
            <div className="next">
                <Link activeClass="active" to="intro" spy={true} smooth={true}>
                    <img className="prev-next-img" src={next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default More