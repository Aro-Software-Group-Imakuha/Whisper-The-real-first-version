import React, { useState, useEffect } from 'react';
import './Timeline.css';

const Timeline = ({ posts }) => {
  const [timelinePosts, setTimelinePosts] = useState([]);

  useEffect(() => {
    setTimelinePosts(posts);
  }, [posts]);

  return (
    <div className="timeline">
      {timelinePosts.map((post, index) => (
        <div key={index} className="timeline-post">
          <h3>{post.user}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post content" />}
          {post.video && <video src={post.video} controls />}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
