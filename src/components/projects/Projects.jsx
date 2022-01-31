import "./Projects.css";
import React from 'react';
import { Link } from 'react-scroll';
import prev from "../../img/ui/chevron_up.png";
import next from "../../img/ui/chevron_down.png";
import projects_arrow from "../../img/ui/curly-arrow.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProjectCard from "./project_card/ProjectCard";

const Projects = () => {
    return (
        <div className="projects">
            <div className="empty-space-for-navbar" />
            <div className="prev">
                <Link activeClass="active" to="education" spy={true} smooth={true}>
                    <img className="prev-next-img" src={prev} alt=""/>
                </Link>
            </div>
            <div className="projects-wrapper">
                <Carousel className="projects-carousel" emulateTouch useKeyboardArrows showStatus={false} showThumbs={false}>
                    <div className="projects-carousel-opener">
                        <h2 className="projects-title">Here's some of my current and previous work...</h2>
                        <p className="projects-subtitle">Flip through 'em to check out what I've been up to!</p>
                        <img className="projects-arrow" src={projects_arrow} alt=""/>
                    </div>
                    <div>
                        <ProjectCard props={ProjectList[0]}/>
                    </div>
                    <div>
                        <ProjectCard props={ProjectList[1]}/>
                    </div>
                    <div>
                        <ProjectCard props={ProjectList[2]}/>
                    </div>
                    <div>
                        <ProjectCard props={ProjectList[3]}/>
                    </div>
                </Carousel>
            </div>
            <div className="next">
                <Link activeClass="active" to="career" spy={true} smooth={true}>
                    <img className="prev-next-img" src={next} alt=""/>
                </Link>
            </div>
        </div>
    )
}

const ProjectList = [
    {
        banner: "plannus.jpg",
        category: "Web Development",
        title: "PlanNUS",
        subtitle: "A timetabling tool for NUS students",
        description: "PlanNUS is a web application that is designed for NUS students to generate their \
most optimal timetables based on their scheduling priorities.\n\nIt is intended to be an academic schedule planning tool \
as well as a timetable management platform. Instead of requiring manual input from students like NUSMods does, \
a robust set of backend algorithms generates the most optimal timetables that adhere to the student's \"everyday habits\".",
        stack: ["ReactJS", "Firebase", "NodeJS"],
        link: "https://plannus-cfd18.web.app/",
        repo: "https://github.com/grrrrnt/plannus",
        documentation: "https://github.com/grrrrnt/plannus/blob/master/Team-9_SelfChosenProject.pdf"
    },
    {
        banner: "autoschedule.png",
        category: "Android App Development",
        title: "AutoSchedule",
        subtitle: "Essentially... PlanNUS v0.1",
        description: "An Android app that recommends academic timetables for NUS students, based on their daily habits. \
The app first considers the user’s priorities regarding their scheduling preferences, and then proceeds to find the most optimal \
timetables which satisfy these priorities.\n\nThis app was developed as part of the Orbital 2019 programme organised by NUS. \
It has since evolved into the PlanNUS project.",
        stack: ["Android", "Java", "Firebase"],
        link: "https://github.com/grrrrnt/AutoSchedule/releases/tag/final",
        repo: "https://github.com/grrrrnt/AutoSchedule",
        documentation: ""
    },
    {
        banner: "resale-flat.png",
        category: "Machine Learning",
        title: "Predicting Future Prices of Resale Flats in Singapore",
        subtitle: "Investigating ML models for housing price predictions",
        description: "An analytical study investigating the best machine learning models for predicting \
HDB resale prices. This project was done as part of the NUS CS3244 (Machine Learning) course.",
        stack: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
        link: "",
        repo: "https://github.com/grrrrnt/hdb-resale-price-prediction",
        documentation: "https://github.com/grrrrnt/hdb-resale-price-prediction/blob/main/Group59_ProjectReport_MLSingapore.pdf"
    },
    {
        banner: "twitter-emotion.png",
        category: "Natural Language Processing",
        title: "Notion of Twitter Emotion",
        subtitle: "Analysis of emotional sentiment in tweets",
        description: "An NLP program to extract emotional sentiment from topical tweets. This mini-research project was done as part of \
the NUS CS4248 (Natural Language Processing) course.",
        stack: ["Python", "NLTK", "NRCLex", "Scikit-Learn", "TensorFlow", "Pandas"],
        link: "",
        repo: "https://github.com/grrrrnt/notion-emotion-twitter",
        documentation: "https://github.com/grrrrnt/notion-emotion-twitter/blob/main/Group%2015%20-%20Project%20Final%20Report.pdf"
    },
]


export default Projects
