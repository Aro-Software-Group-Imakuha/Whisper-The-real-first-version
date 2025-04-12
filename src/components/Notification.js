import React from 'react';
import './Notification.css';

const Notification = ({ notification }) => {
    return (
        <div className="notification">
            <p>{notification.message}</p>
            <span>{notification.time}</span>
        </div>
    );
};

export default Notification;
