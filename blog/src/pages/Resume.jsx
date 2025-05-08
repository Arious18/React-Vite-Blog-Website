import './Resume.css'

function Resume() {
    return (
        <div className="resume-page">
            <div className="container">
                <h1 className="page-title">Resume</h1>

                <div className="resume-actions">
                    <a href="/Azat_Vepakulyyev_Resume.pdf" className="btn" download>Download PDF</a>
                </div>

                <div className="resume">
                    <header className="resume-header">
                        <div className="resume-header-content">
                            <h1 className="resume-name">AZAT VEPAKULYYEV</h1>
                            <h2 className="resume-title">Software Engineer Student</h2>

                            <div className="resume-contact">
                                <div className="contact-item">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>+90 501 354 2771</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>azatvepakulyyev@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>Isparta/Turkey</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="resume-section">
                        <h2 className="resume-section-title">MY LIFE PHILOSOPHY</h2>
                        <p className="resume-philosophy">"A code review a day keeps the bugs away."</p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">SUMMARY</h2>
                        <p>
                            I am a highly motivated and detail-oriented Software Engineering student
                            with a strong passion for developing software solutions. I possess practical
                            experience in Java, C#, C, HTML, CSS, React, PostgreSQL, and MongoDB, applying software development
                            principles to create dynamic and responsive applications. Seeking a Software
                            Engineer Intern position to leverage my technical skills, collaborate on
                            innovative projects with a talented team, and further expand my knowledge in a
                            professional environment. Committed to continuous learning and eager to
                            contribute to impactful software solutions.
                        </p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">EXPERIENCE</h2>
                        <div className="experience-item">
                            <p>
                                As a Software Engineering student, I've developed and tested software
                                solutions using Java Spring, achieving significant performance optimizations and
                                implementing new features. I collaborated with a team of engineers to enhance
                                code quality through rigorous code reviews.
                            </p>
                            <p>
                                I have hands-on experience developing applications using Unity. I've applied
                                Unity's powerful features to create interactive and engaging experiences,
                                leveraging C# for scripting and implementing various gameplay mechanics and
                                user interfaces. My work includes optimizing performance, integrating assets,
                                and ensuring compatibility across different platforms, contributing to the
                                seamless deployment of applications.
                            </p>
                            <p>
                                During my journey with HTML, I've learned that it serves as the backbone of
                                web development. It's not a programming language per se; rather, it's a markup
                                language that structures content on web pages.
                            </p>
                        </div>
                    </section>

                    <div className="resume-columns">
                        <section className="resume-section">
                            <h2 className="resume-section-title">SKILLS</h2>
                            <ul className="skills-list">
                                <li>JAVA (SPRING BOOT)</li>
                                <li>REACT</li>
                                <li>POSTGRESQL</li>
                                <li>MONGODB</li>
                                <li>C#</li>
                                <li>C/C++</li>
                                <li>UNITY</li>
                                <li>HTML5/CSS</li>
                            </ul>
                        </section>

                        <section className="resume-section">
                            <h2 className="resume-section-title">STRENGTHS</h2>
                            <ul className="strengths-list">
                                <li>Public Relations</li>
                                <li>Teamwork</li>
                                <li>Time Management</li>
                                <li>Effective Communication</li>
                                <li>Critical Thinking</li>
                                <li>Creative</li>
                            </ul>
                        </section>

                        <section className="resume-section">
                            <h2 className="resume-section-title">LANGUAGE</h2>
                            <ul className="language-list">
                                <li>Turkish</li>
                                <li>English</li>
                                <li>Turkmen</li>
                            </ul>
                        </section>

                        <section className="resume-section">
                            <h2 className="resume-section-title">EDUCATION</h2>
                            <div className="education-item">
                                <h3>SULEYMAN DEMIREL UNIVERSITY</h3>
                                <p>COMPUTER ENGINEERING (STUDENT)</p>
                                <p>2022-2026</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume