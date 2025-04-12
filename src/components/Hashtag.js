import React, { useState } from 'react';
import './Hashtag.css';

const Hashtag = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.example.com/hashtags?q=${query}`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching hashtag results:', error);
        }
    };

    return (
        <div className="hashtag">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for hashtags"
                />
                <button type="submit">Search</button>
            </form>
            <div className="hashtag-results">
                {results.map((result, index) => (
                    <div key={index} className="hashtag-result">
                        <p>{result.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hashtag;
