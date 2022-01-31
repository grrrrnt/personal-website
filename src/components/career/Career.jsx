import "./Career.css";
import React from 'react';
import { Link } from 'react-scroll';
import { Chrono } from 'react-chrono';
import intro_prev from "../../img/ui/chevron_up.png";
import intro_next from "../../img/ui/chevron_down.png";
import gametize from "../../img/career/gametize-logo.png";
import stengineering from "../../img/career/st-engineering-logo.png";
import nus from "../../img/career/nus-logo.png";

const Career = () => {
    return (
        <div className="career">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="projects" spy={true} smooth={true}>
                    <img className="prev-next-img" src={intro_prev} alt=""/>
                </Link>
            </div>
            <div className="career-wrapper">
                <div className="career-timeline" >
                    <Chrono
                        items={jobs}
                        mode="VERTICAL"
                        cardHeight={180}
                        activeItemIndex={5}
                        scrollable={{scrollbar: true}}
                        theme={{
                            primary: "rgb(204, 80, 80)",
                            secondary: "rgb(236, 213, 0)",
                            cardBgColor: "rgb(63, 28, 28)",
                            cardForeColor: "white",
                            titleColor: "rgb(107, 22, 22)"
                          }}
                    >
                        <div className="career-card">
                            <p>• Conducted market and technology research for smart parking solution and congestion control projects</p>
                            <p>• Wrote Python scripts for use in smart parking solution</p>
                            <p>• Involved in regular evaluations of smart parking solution and development process</p>
                            <div className="career-card-stack">
                                {jobs[0].stack.map((item, index) => {return (<div className="career-card-stack-item" key={index}>{item}</div>)})}
                            </div>
                        </div>
                        <div className="career-card">
                            <p>• Performed DevOps and testing roles for AOCS (Advanced Operations Centre Solution) framework</p>
                            <p>• Utilising virtualisation platforms to create and manage virtual machines for testing, staging, integration environments</p>
                            <p>• Research and development of configuration management capabilities using Ansible</p>
                            <p>• Web application development using AngularJS, NodeJS and REST APIs</p>
                            <div className="career-card-stack">
                                {jobs[1].stack.map((item, index) => {return (<div className="career-card-stack-item" key={index}>{item}</div>)})}
                            </div>
                        </div>
                        <div className="career-card">
                            <p>• In charge of overseeing the software development process for 5 teams of freshmen as their project manager</p>
                            <p>• Provided frequent feedback and evaluation for their projects</p>
                            <p>• Performed code review where necessary</p>
                            <p>• Provided guidance and learning resources suitable for beginner developers</p>
                        </div>
                        <div className="career-card">
                            <p>• Engaged in a client-facing role, developing a progressive web app (PWA) for a client company's staff training programme</p>
                            <p>• Completed implementation of the interactive, visual novel-style mobile web app using Phaser library</p>
                            <p>• Developed new features for internal SaaS gamification platform, based on Apache Struts, ReactJS and MySQL</p>
                            <div className="career-card-stack">
                                {jobs[3].stack.map((item, index) => {return (<div className="career-card-stack-item" key={index}>{item}</div>)})}
                            </div>
                        </div>
                        <div className="career-card">
                            <p>• Served as project manager for 15 teams</p>
                            <p>• Provided beginner developers with guidance on development plan, workflow tools, documentation and implementation for their software development projects</p>
                            <p>• Provided frequent feedback and evaluation for their projects</p>
                            <p>• Performed code review where necessary</p>
                        </div>
                        <div className="career-card">
                            <p>• Develop secure and robust product features</p>
                            <p>• Analyse user's requirements and apply user centric design into product development</p>
                            <p>• Upgrade product architecture to handle future usage</p>
                            <p>• Integrate external services to extend the usefulness of platform</p>
                            <p>• Troubleshoot technical issues</p>
                            <p>• Provide technical support</p>
                            <p>• Manage technical projects</p>
                            <div className="career-card-stack">
                                {jobs[5].stack.map((item, index) => {return (<div className="career-card-stack-item" key={index}>{item}</div>)})}
                            </div>
                        </div>
                        <div className="chrono-icons">
                            <img src={stengineering} alt="stengineering-logo" />
                            <img src={stengineering} alt="gametize-logo" />
                            <img src={nus} alt="gametize-logo" />
                            <img src={gametize} alt="gametize-logo" />
                            <img src={nus} alt="gametize-logo" />
                            <img src={gametize} alt="gametize-logo" />
                        </div>
                    </Chrono>
                </div>
            </div>
            <div className="next">
                <Link activeClass="active" to="skills" spy={true} smooth={true}>
                    <img className="prev-next-img" src={intro_next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

const jobs = [
    {
        title: "Feb 2018 - May 2018",
        cardTitle: "Market Research Intern",
        cardSubtitle: "ST Engineering",
        stack: ["Python"]
    }, {
        title: "May 2020 - Jul 2020",
        cardTitle: "Software Engineer Intern",
        cardSubtitle: "ST Engineering",
        stack: ["AngularJS", "NodeJS", "REST APIs"]
    }, {
        title: "May 2020 - Aug 2020",
        cardTitle: "Advisor for NUS Orbital Programme",
        cardSubtitle: "National University of Singapore (School of Computing)",
    }, {
        title: "May 2021 - Jul 2021",
        cardTitle: "Software Engineer Intern",
        cardSubtitle: "Gametize",
        stack: ["Apache Struts", "ReactJS", "MySQL", "Phaser", "PWA"]
    }, {
        title: "May 2021 - Aug 2021",
        cardTitle: "Senior Advisor for NUS Orbital Programme",
        cardSubtitle: "National University of Singapore (School of Computing)",
    }, {
        title: "Jan 2022 - Present",
        cardTitle: "Software Engineer",
        cardSubtitle: "Gametize",
        stack: ["Flutter", "Apache Struts", "MySQL", "ReactJS"]
    }
];

export default Career