import { useState } from 'react'
import './Projects.css'

function Projects() {
    const [projects] = useState([
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application built with React, Spring Boot, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and order management.',
            technologies: ['React', 'Spring Boot', 'PostgreSQL', 'REST API'],
            image: '/project-1.jpg',
            github: 'https://github.com/',
            demo: 'https://demo-link.com/'
        },
        {
            id: 2,
            title: '3D Game in Unity',
            description: 'An interactive 3D adventure game developed using Unity and C#. Implemented game mechanics, physics, and character controllers.',
            technologies: ['Unity', 'C#', '3D Modeling', 'Animation'],
            image: '/project-2.png',
            github: 'https://github.com/',
            demo: 'https://demo-link.com/'
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'A task management application built with React and MongoDB. Features include task creation, assignment, priority levels, and deadline tracking.',
            technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
            image: '/project-3.png',
            github: 'https://github.com/',
            demo: 'https://demo-link.com/'
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            description: 'A weather dashboard that displays current weather conditions and forecasts for any location. Integrates with a weather API to fetch real-time data.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
            image: '/project-4.png',
            github: 'https://github.com/',
            demo: 'https://demo-link.com/'
        }
    ])

    return (
        <div className="projects-page">
            <div className="container">
                <h1 className="page-title">My Projects</h1>
                <p className="page-description">
                    Here are some of the projects I've worked on. Each project provided unique challenges and learning opportunities.
                </p>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <i className="fa-brands fa-github"></i> Code
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <i className="fa-solid fa-globe"></i> Demo
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span className="tech-tag" key={index}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="more-projects">
                    <p>Want to see more of my work?</p>
                    <a href="https://github.com/Arious18" target="_blank" rel="noopener noreferrer" className="btn">Visit My GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Projects