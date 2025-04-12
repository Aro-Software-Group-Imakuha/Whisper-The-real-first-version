import React, { useState } from 'react';
import './LiveStream.css';

const LiveStream = () => {
    const [isLive, setIsLive] = useState(false);

    const startLiveStream = () => {
        setIsLive(true);
        console.log('Live stream started');
    };

    return (
        <div className="live-stream">
            {isLive ? (
                <div className="live-streaming">
                    <p>Live streaming...</p>
                    <video src="live-stream-url" controls autoPlay />
                </div>
            ) : (
                <button onClick={startLiveStream}>Start Live Stream</button>
            )}
        </div>
    );
};

export default LiveStream;
