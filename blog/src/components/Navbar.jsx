import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Azat Vepakulyyev</Link>

                {/* Mobile menu button */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={menuOpen ? 'menu-icon-line open' : 'menu-icon-line'}></span>
                    <span className={menuOpen ? 'menu-icon-line open' : 'menu-icon-line'}></span>
                    <span className={menuOpen ? 'menu-icon-line open' : 'menu-icon-line'}></span>
                </div>

                {/* Desktop menu */}
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/projects" className="nav-link">Projects</Link></li>
                    <li><Link to="/blog" className="nav-link">Blog</Link></li>
                    <li><Link to="/resume" className="nav-link">Resume</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>

                {/* Mobile menu */}
                {menuOpen && (
                    <ul className="mobile-menu">
                        <li><Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/projects" className="mobile-link" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                        <li><Link to="/blog" className="mobile-link" onClick={() => setMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/resume" className="mobile-link" onClick={() => setMenuOpen(false)}>Resume</Link></li>
                        <li><Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar