import './Contact.css'

function Contact() {
    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title">Get In Touch</h1>
                <p className="page-description">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>azatvepakulyyev@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Phone</h3>
                                <p>+90 501 354 2771</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Location</h3>
                                <p>Isparta, Turkey</p>
                            </div>
                        </div>

                        <div className="contact-social">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2>Contact Information</h2>
                        <div className="static-contact-info">
                            <p>
                                Thank you for your interest in getting in touch with me. I'm currently open to new opportunities and collaborations.
                            </p>
                            <p>
                                Feel free to reach out to me directly via email or phone call, and I'll get back to you as soon as possible.
                            </p>
                            <div className="static-contact-highlight">
                                <p><strong>Email:</strong> azatvepakulyyev@gmail.com</p>
                                <p><strong>Phone:</strong> +90 501 354 2771</p>
                            </div>
                            <p>
                                You can also connect with me on GitHub or LinkedIn to see more of my work and professional experience.
                            </p>
                            <div className="static-contact-cta">
                                <a href="mailto:azatvepakulyyev@gmail.com" className="btn email-btn">
                                    <i className="fa-solid fa-envelope"></i> Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact