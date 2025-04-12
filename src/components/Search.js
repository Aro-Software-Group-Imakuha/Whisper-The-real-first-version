import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.example.com/search?q=${query}`);
            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for topics and accounts"
                />
                <button type="submit">Search</button>
            </form>
            <div className="search-results">
                {results.map((result, index) => (
                    <div key={index} className="search-result">
                        <p>{result.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
