import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h2 className="footer-name">Azat Vepakulyyev</h2>
                        <p className="footer-title">Software Engineer Student</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:azatvepakulyyev@gmail.com" className="social-link">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Azat Vepakulyyev. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer