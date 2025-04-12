import React from 'react';
import './QuoteRepost.css';

const QuoteRepost = ({ user, content, image, video, quote }) => {
  const handleQuoteRepost = () => {
    // Function to quote repost content
    console.log('Quote Reposted:', { user, content, image, video, quote });
  };

  return (
    <div className="quote-repost">
      <div className="quote-repost-header">
        <h3>{user}</h3>
      </div>
      <div className="quote-repost-content">
        <p>{content}</p>
        {image && <img src={image} alt="Quote Repost content" />}
        {video && <video src={video} controls />}
        <blockquote>{quote}</blockquote>
      </div>
      <div className="quote-repost-actions">
        <button onClick={handleQuoteRepost}>Quote Repost</button>
      </div>
    </div>
  );
};

export default QuoteRepost;
