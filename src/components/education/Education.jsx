import "./Education.css";
import React from 'react';
import soc_logo from "../../img/education/nus-soc-logo-white.png";
import { Link } from 'react-scroll';
import prev from "../../img/ui/chevron_up.png";
import next from "../../img/ui/chevron_down.png";
import ReactCardFlipper from "react-card-flipper";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Education = () => {
    const isPortrait = window.innerHeight > window.innerWidth;

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="education">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="intro" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="education-wrapper">
                <div className="education-left" data-aos="fade-up">
                    <div className="education-left-wrapper">
                        <h3 className="education-left-preface">
                            I attained my bachelor's degree at...
                        </h3>
                        <div>
                            <img className="soc-logo" src={soc_logo} alt=""/>
                        </div>
                        <h3 className="education-left-degree-1">
                            Bachelor of Computing in Computer Science
                        </h3>
                        <div className="education-left-degree-2">
                            <h3>with Honours (Distinction)</h3>
                            <p>aka. Second Class (Upper) Honours</p>   
                        </div>
                        <div className="education-left-awards">
                            <h3>Academic awards received:</h3>
                            <p>•  <a href="https://credentials.nus.edu.sg/5f93b047-5714-46c0-8c8c-4db16f892181" rel="noopener noreferrer" target="_blank">Certificate of Merit in Software Engineering Focus Area</a></p>
                            <p>•  <a href="https://credentials.nus.edu.sg/cb7fdf52-979f-4541-af61-26fb1db88946" rel="noopener noreferrer" target="_blank">Dean's List (Academic Year 2021/2022, Semester 1)</a></p>
                        </div>
                    </div>
                </div>
                <div className="education-right" data-aos="slide-up">
                    <div className="education-right-wrapper">
                        <h3 className="education-right-preface">My specialisations are...</h3>
                        <div className="education-right-spec">
                            <ReactCardFlipper
                                width="50vh"
                                height="15vh"
                                behavior={ isPortrait ? "click" : "hover"}
                            >
                                <div className="education-right-spec-card-front">
                                    <h3 className="education-right-spec-name">Software Engineering</h3>
                                    <p className="education-right-spec-subtitle">({ isPortrait ? "Tap on" : "Hover over"} me!)</p>
                                </div>
                                <div className="education-right-spec-card-back">
                                    <div className="education-right-spec-courses">
                                        <h4 className="education-right-spec-courses-header">Undergraduate courses taken:</h4>
                                        <p>•  CS4218 - Software Testing</p>
                                        <p>•  CS3219 - Software Principles and Patterns</p>
                                        <p>•  CS3203 - Software Engineering Project</p>
                                        <p>•  CP2106 - Orbital Programme</p>
                                        <p>•  Senior Advisor (TA) for Orbital Programme</p>
                                    </div>
                                </div>
                            </ReactCardFlipper>
                        </div>
                        <div className="education-right-spec">
                            <ReactCardFlipper
                                width="50vh"
                                height="15vh"
                                behavior={ isPortrait ? "click" : "hover"}
                            >
                                <div className="education-right-spec-card-front">
                                    <h3 className="education-right-spec-name">Artificial Intelligence</h3>
                                    <p className="education-right-spec-subtitle">({ isPortrait ? "Tap on" : "Hover over"} me too!)</p>
                                </div>
                                <div className="education-right-spec-card-back">
                                    <div className="education-right-spec-courses">
                                        <h4 className="education-right-spec-courses-header">Undergraduate courses taken:</h4>
                                        <p>•  CS4248 - Natural Language Processing</p>
                                        <p>•  CS4243 - Computer Vision</p>
                                        <p>•  CS3244 - Machine Learning</p>
                                        <p>•  CS3243 - Introduction to Artificial Intelligence</p>
                                    </div>
                                </div>
                            </ReactCardFlipper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="next">
                <Link activeClass="active" to="projects" spy={true} smooth={true}>
                    <img className="prev-next-img" src={next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Education