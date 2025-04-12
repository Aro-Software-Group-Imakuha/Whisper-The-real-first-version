import React from 'react';
import './PrivateAccount.css';

const PrivateAccount = ({ isPrivate, togglePrivacy }) => {
    return (
        <div className="private-account">
            <h2>Private Account</h2>
            <p>Your account is currently {isPrivate ? 'Private' : 'Public'}.</p>
            <button onClick={togglePrivacy}>
                {isPrivate ? 'Set to Public' : 'Set to Private'}
            </button>
        </div>
    );
};

export default PrivateAccount;
