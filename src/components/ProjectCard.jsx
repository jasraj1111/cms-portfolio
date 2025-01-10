import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
    <div className="project-card">
        {/* <img src={project.image} alt={project.title} /> */}
        <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    </div>
);

export default ProjectCard;
