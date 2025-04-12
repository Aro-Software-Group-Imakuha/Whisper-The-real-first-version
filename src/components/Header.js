import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Whisper Logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#stories">Stories</a></li>
                    <li><a href="#reels">Reels</a></li>
                    <li><a href="#live">Live</a></li>
                    <li><a href="#messages">Messages</a></li>
                    <li><a href="#shopping">Shopping</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
