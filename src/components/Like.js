import React, { useState } from 'react';
import './Like.css';

const Like = ({ postId }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
        // Add logic to update likes in the backend
    };

    return (
        <div className="like">
            <button onClick={handleLike}>Like ({likes})</button>
        </div>
    );
};

export default Like;
