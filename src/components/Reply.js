import React, { useState } from 'react';
import './Reply.css';

const Reply = ({ postId }) => {
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState('');

    const handleReplyChange = (e) => {
        setNewReply(e.target.value);
    };

    const handleReplySubmit = (e) => {
        e.preventDefault();
        setReplies([...replies, newReply]);
        setNewReply('');
        // Add logic to update replies in the backend
    };

    return (
        <div className="reply">
            <form onSubmit={handleReplySubmit}>
                <input
                    type="text"
                    value={newReply}
                    onChange={handleReplyChange}
                    placeholder="Write a reply..."
                />
                <button type="submit">Reply</button>
            </form>
            <div className="replies">
                {replies.map((reply, index) => (
                    <div key={index} className="reply-item">
                        <p>{reply}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reply;
