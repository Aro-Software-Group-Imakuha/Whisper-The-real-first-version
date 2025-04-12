import React from 'react';
import './Mute.css';

const Mute = ({ account, keyword, onMuteAccount, onMuteKeyword }) => {
    return (
        <div className="mute">
            <div className="mute-account">
                <p>{account.name}</p>
                <button onClick={() => onMuteAccount(account.id)}>Mute Account</button>
            </div>
            <div className="mute-keyword">
                <p>{keyword}</p>
                <button onClick={() => onMuteKeyword(keyword)}>Mute Keyword</button>
            </div>
        </div>
    );
};

export default Mute;
