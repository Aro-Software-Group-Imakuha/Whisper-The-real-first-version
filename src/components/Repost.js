import React from 'react';
import './Repost.css';

const Repost = ({ user, content, image, video }) => {
  const handleRepost = () => {
    // Function to repost content
    console.log('Reposted:', { user, content, image, video });
  };

  return (
    <div className="repost">
      <div className="repost-header">
        <h3>{user}</h3>
      </div>
      <div className="repost-content">
        <p>{content}</p>
        {image && <img src={image} alt="Repost content" />}
        {video && <video src={video} controls />}
      </div>
      <div className="repost-actions">
        <button onClick={handleRepost}>Repost</button>
      </div>
    </div>
  );
};

export default Repost;
