import React, { useState } from 'react';
import './Bookmark.css';

const Bookmark = ({ postId }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
        // Add logic to update bookmark status in the backend
    };

    return (
        <div className="bookmark">
            <button onClick={handleBookmark}>
                {bookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>
        </div>
    );
};

export default Bookmark;
