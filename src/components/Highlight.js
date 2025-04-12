import React from 'react';
import './Highlight.css';

const Highlight = ({ highlight }) => {
    return (
        <div className="highlight">
            <img src={highlight.image} alt={highlight.title} />
            <p>{highlight.title}</p>
        </div>
    );
};

export default Highlight;
