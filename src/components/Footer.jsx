import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
    </footer>
);

export default Footer;
