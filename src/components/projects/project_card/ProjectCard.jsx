import "./ProjectCard.css";
import React from 'react';

// props = {banner, category, title, subtitle, description, stack, link, repo, documentation}
const ProjectCard = ({props}) => {
    let project_card_link, project_card_documentation;

    if (props.link == "") {
        project_card_link = <div/>;
    } else {
        project_card_link = <a className="project-card-button" href={props.link} target="_blank" rel="noopener noreferrer">Try it out!</a>;
    }

    if (props.documentation == "") {
        project_card_documentation = <div/>;
    } else {
        project_card_documentation = <a className="project-card-button" href={props.documentation} target="_blank" rel="noopener noreferrer">Read Documentation</a>;
    }

    return (
        <div className="project-card">
            <div className="project-card-banner">
                <img className="project-card-banner-img" src={require(`../../../img/projects/${props.banner}`)} alt="not found"/>
            </div>
            <div className="project-card-info">
                <h4 className="project-card-category">{props.category}</h4>
                <h3 className="project-card-title">{props.title}</h3>
                <h4 className="project-card-subtitle">{props.subtitle}</h4>
                <p className="project-card-description">{props.description}</p>
                <div className="project-card-stack">
                    <h4 className="project-card-stack-header">Tech stack:</h4>
                    {props.stack.map((item, index) => {
                        return (
                            <div className="project-card-stack-item" key={index}>{item}</div>  )
                        })
                    }
                </div>
                <div className="project-card-button-wrapper">
                    {project_card_link}
                    <a className="project-card-button" href={props.repo} target="_blank" rel="noopener noreferrer">View Repo on GitHub</a>
                    {project_card_documentation}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard