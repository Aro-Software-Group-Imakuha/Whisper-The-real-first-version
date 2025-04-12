import React, { useState } from 'react';
import './Thread.css';

const Thread = ({ user, posts }) => {
  const [newPost, setNewPost] = useState('');
  const [threadPosts, setThreadPosts] = useState(posts);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newThreadPost = {
      user,
      content: newPost,
      timestamp: new Date().toLocaleString(),
    };
    setThreadPosts([...threadPosts, newThreadPost]);
    setNewPost('');
  };

  return (
    <div className="thread">
      <div className="thread-header">
        <h3>{user}'s Thread</h3>
      </div>
      <div className="thread-posts">
        {threadPosts.map((post, index) => (
          <div key={index} className="thread-post">
            <p>{post.content}</p>
            <span>{post.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="thread-new-post">
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            value={newPost}
            onChange={handlePostChange}
            placeholder="Write a new post..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Thread;
