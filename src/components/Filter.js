import React from 'react';
import './Filter.css';

const Filter = ({ photo, video, applyFilter }) => {
    return (
        <div className="filter">
            <div className="media">
                {photo && <img src={photo} alt="Photo" />}
                {video && <video src={video} controls />}
            </div>
            <button onClick={applyFilter}>Apply Filter</button>
        </div>
    );
};

export default Filter;
