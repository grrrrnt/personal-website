import "./Education.css"
import React, { useState } from 'react';
import soc_logo from "../../img/nus-soc-logo-white.png"

const Education = () => {
    return (
        <div className="education">
            <div className="empty-space-for-navbar" />
            <div className="education-wrapper">
                <div className="education-left">
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
                    </div>
                </div>
                <div className="education-right">
                    <div className="education-right-wrapper">
                        <h3 className="education-right-preface">My specialisations are...</h3>
                        <div className="education-right-spec">
                            <h3 className="education-right-spec-no">1</h3>
                            <h3 className="education-right-spec-name">Software Engineering</h3>
                            <div className="education-right-spec-award">
                            <p>
                                Awarded the <a href="https://credentials.nus.edu.sg/5f93b047-5714-46c0-8c8c-4db16f892181" rel="noopener noreferrer" target="_blank">Certificate of Merit in Software Engineering Focus Area</a>
                            </p>
                            </div>
                            <div className="education-right-spec-courses">
                                <h4>Undergraduate courses taken:</h4>
                                <p>•  CS4218 - Software Testing</p>
                                <p>•  CS3219 - Software Principles and Patterns</p>
                                <p>•  CS3203 - Software Engineering Project</p>
                                <p>•  CP2106 - Orbital Programme</p>
                                <p>•  Senior Advisor (TA) for Orbital Programme</p>
                            </div>
                        </div>
                        <div className="education-right-spec">
                            <h3 className="education-right-spec-no">2</h3>
                            <h3 className="education-right-spec-name">Artificial Intelligence</h3>
                            <div className="education-right-spec-courses">
                                <h4>Undergraduate courses taken:</h4>
                                <p>•  CS4248 - Natural Language Processing</p>
                                <p>•  CS4243 - Computer Vision</p>
                                <p>•  CS3244 - Machine Learning</p>
                                <p>•  CS3243 - Introduction to Artificial Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education