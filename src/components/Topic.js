import React from 'react';
import './Topic.css';

const Topic = ({ topic, onFollow }) => {
    return (
        <div className="topic">
            <p>{topic.name}</p>
            <button onClick={() => onFollow(topic.id)}>Follow</button>
        </div>
    );
};

export default Topic;
