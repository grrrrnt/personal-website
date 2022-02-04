import "./Skills.css";
import React from 'react';
import { Link } from 'react-scroll';
import prev from "../../img/ui/chevron_up.png";
import next from "../../img/ui/chevron_down.png";
import java from "../../img/skills/java.png";
import cpp from "../../img/skills/cpp.png";
import python from "../../img/skills/python.png";
import react from "../../img/skills/react.png";
import htmlcssjs from "../../img/skills/html-css-js.png";
import angular from "../../img/skills/angular.png";
import nodejs from "../../img/skills/nodejs.png";
import mysql from "../../img/skills/mysql.png";
import mongodb from "../../img/skills/mongodb.png";
import docker from "../../img/skills/docker.png";
import firebase from "../../img/skills/firebase.png";
import aws from "../../img/skills/aws.png";
import android from "../../img/skills/android.png";
import flutter from "../../img/skills/flutter.png";
import pwa from "../../img/skills/pwa.png";
import scikitlearn from "../../img/skills/scikitlearn.png";
import tensorflow from "../../img/skills/tensorflow.png";
import nltk from "../../img/skills/nltk.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="skills">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="career" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="skills-wrapper">
                <div className="skills-left" data-aos="fade-up">
                    <div className="skill-section">
                        <h2 className="skill-section-name">Frontend Web</h2>
                        <div className="skill-section-logos">
                            <img className="skill-img" src={react} alt=""/>
                            <img className="skill-img" src={angular} alt=""/>
                            <img className="skill-img" src={htmlcssjs} alt=""/>
                            </div>
                    </div>
                    <div className="skill-section">
                        <h2 className="skill-section-name">Backend Web</h2>
                        <div className="skill-section-logos">
                            <img className="skill-img" src={nodejs} alt=""/>
                            <img className="skill-img" src={mysql} alt=""/>
                            <img className="skill-img" src={mongodb} alt=""/>
                        </div>
                    </div>
                    <div className="skill-section">
                        <h2 className="skill-section-name">DevOps</h2>
                        <div className="skill-section-logos">
                            <img className="skill-img" src={docker} alt=""/>
                            <img className="skill-img" src={firebase} alt=""/>
                            <img className="skill-img" src={aws} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="skills-right" data-aos="fade-down">
                    <div className="skill-section">
                        <h2 className="skill-section-name">Languages</h2>
                        <div className="skill-section-logos">
                            <img className="skill-img" src={java} alt=""/>
                            <img className="skill-img" src={cpp} alt=""/>
                            <img className="skill-img" src={python} alt=""/>
                        </div>
                    </div>
                    <div className="skill-section">
                        <h2 className="skill-section-name">Mobile App Dev</h2>
                        <div className="skill-section-logos">
                            <img className="skill-img" src={android} alt=""/>
                            <img className="skill-img" src={flutter} alt=""/>
                            <img className="skill-img" src={pwa} alt=""/>
                        </div>
                    </div>
                    <div className="skill-section">
                        <h2 className="skill-section-name">Machine Learning</h2>
                        <div className="skill-section-logos">
                            <img className="skill-img" src={scikitlearn} alt=""/>
                            <img className="skill-img" src={tensorflow} alt=""/>
                            <img className="skill-img" src={nltk} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="next">
                <Link activeClass="active" to="discography" spy={true} smooth={true}>
                    <img className="prev-next-img" src={next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Skills