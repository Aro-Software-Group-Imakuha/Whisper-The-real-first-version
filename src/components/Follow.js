import React from 'react';
import './Follow.css';

const Follow = ({ account, onFollow }) => {
    return (
        <div className="follow">
            <p>{account.name}</p>
            <button onClick={() => onFollow(account.id)}>Follow</button>
        </div>
    );
};

export default Follow;
