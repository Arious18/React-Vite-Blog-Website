import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">Hi, I'm Azat Vepakulyyev</h1>
                            <h2 className="hero-subtitle">Software Engineer Student</h2>
                            <p className="hero-description">
                                A detail-oriented developer with a passion for creating efficient and elegant solutions.
                                Currently studying Computer Engineering and seeking software engineering opportunities.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/contact" className="btn contact-btn">Get In Touch</Link>
                                <Link to="/projects" className="btn project-btn">View My Work</Link>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/profile-photo.jpg" alt="Azat Vepakulyyev" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills section">
                <div className="container">
                    <h2 className="section-title">My Skills</h2>
                    <div className="skills-container">
                        <div className="skill-card">
                            <div className="skill-icon">
                                <i className="fa-brands fa-java"></i>
                            </div>
                            <h3 className="skill-title">Java (Spring Boot)</h3>
                            <p className="skill-description">
                                Developed and tested software solutions using Java Spring, achieving significant performance optimizations.
                            </p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon">
                                <i className="fa-brands fa-react"></i>
                            </div>
                            <h3 className="skill-title">React</h3>
                            <p className="skill-description">
                                Building responsive and interactive user interfaces with modern React, including hooks and context API.
                            </p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon">
                                <i className="fa-solid fa-database"></i>
                            </div>
                            <h3 className="skill-title">PostgreSQL</h3>
                            <p className="skill-description">
                                Designing and optimizing relational database schemas, writing efficient queries and stored procedures.
                            </p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon">
                                <i className="fa-solid fa-database"></i>
                            </div>
                            <h3 className="skill-title">MongoDB</h3>
                            <p className="skill-description">
                                Working with NoSQL databases for flexible schema design and handling large volumes of data.
                            </p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon">
                                <i className="fa-brands fa-unity"></i>
                            </div>
                            <h3 className="skill-title">Unity & C#</h3>
                            <p className="skill-description">
                                Developing interactive applications using Unity's features and C# for scripting to create engaging experiences.
                            </p>
                        </div>

                        <div className="skill-card">
                            <div className="skill-icon">
                                <i className="fa-brands fa-html5"></i>
                            </div>
                            <h3 className="skill-title">HTML5/CSS</h3>
                            <p className="skill-description">
                                Creating structured, semantic web content with responsive design principles for cross-platform compatibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about section">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I am a highly motivated and detail-oriented Software Engineering student with a strong
                                passion for developing software solutions. I possess practical experience in Java, C#,
                                C, HTML, CSS, React, PostgreSQL, and MongoDB, applying software development principles
                                to create dynamic and responsive applications.
                            </p>
                            <p>
                                Currently, I'm studying Computer Engineering at Suleyman Demirel University (2022-2026).
                                I'm seeking a Software Engineer Intern position to leverage my technical skills, collaborate
                                on innovative projects with a talented team, and further expand my knowledge in a professional
                                environment.
                            </p>
                            <p>
                                My life philosophy: <em>"A code review a day keeps the bugs away."</em>
                            </p>
                            <Link to="/resume" className="btn resume-btn">View Full Resume</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-blogs section">
                <div className="container">
                    <h2 className="section-title">Latest Blog Posts</h2>
                    <div className="blog-preview-container">
                        <div className="blog-preview">
                            <div className="blog-preview-img">
                                <img src="/blog-1.png" alt="Blog Post" />
                            </div>
                            <div className="blog-preview-content">
                                <h3 className="blog-preview-title">Getting Started with Spring Boot</h3>
                                <p className="blog-preview-date">May 1, 2025</p>
                                <p className="blog-preview-excerpt">
                                    Learn how to set up your first Spring Boot application and understand the core concepts...
                                </p>
                                <Link to="/blog" className="blog-preview-link">Read More</Link>
                            </div>
                        </div>

                        <div className="blog-preview">
                            <div className="blog-preview-img">
                                <img src="/blog-2.png" alt="Blog Post" />
                            </div>
                            <div className="blog-preview-content">
                                <h3 className="blog-preview-title">My Journey Learning React</h3>
                                <p className="blog-preview-date">April 22, 2025</p>
                                <p className="blog-preview-excerpt">
                                    In this post, I share my experience learning React and some key takeaways for beginners...
                                </p>
                                <Link to="/blog" className="blog-preview-link">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-more">
                        <Link to="/blog" className="btn">View All Posts</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home