import React from 'react';
import './Story.css';

const Story = ({ story }) => {
    return (
        <div className="story">
            <img src={story.image} alt={story.title} />
            <p>{story.title}</p>
        </div>
    );
};

export default Story;
