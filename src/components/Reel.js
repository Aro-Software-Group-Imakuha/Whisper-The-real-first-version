import React from 'react';
import './Reel.css';

const Reel = ({ reel }) => {
    return (
        <div className="reel">
            <video src={reel.video} controls />
            <p>{reel.title}</p>
        </div>
    );
};

export default Reel;
