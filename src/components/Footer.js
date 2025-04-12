import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="contact-info">
                <p>Contact us: contact@whisper.com</p>
                <p>&copy; 2023 Aro Software Group. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
