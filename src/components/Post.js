import React, { useState } from 'react';
import './Post.css';

const Post = ({ user, content, image, video }) => {
  const [likes, setLikes] = useState(0);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    setReplies([...replies, newReply]);
    setNewReply('');
  };

  return (
    <div className="post">
      <div className="post-header">
        <h3>{user}</h3>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image && <img src={image} alt="Post content" />}
        {video && <video src={video} controls />}
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <form onSubmit={handleReplySubmit}>
          <input
            type="text"
            value={newReply}
            onChange={handleReplyChange}
            placeholder="Write a reply..."
          />
          <button type="submit">Reply</button>
        </form>
      </div>
      <div className="post-replies">
        {replies.map((reply, index) => (
          <div key={index} className="reply">
            <p>{reply}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
