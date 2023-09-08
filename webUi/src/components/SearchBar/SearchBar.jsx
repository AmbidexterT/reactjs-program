import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ initialQuery, onSearch }) {
    const [query, setQuery] = useState(initialQuery || '');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(query);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <header className="search-header">
            <div className="search-container">
                <label className="search-label text-white">FIND YOUR MOVIE</label>
                <div className="search-bar-content">
                    <input
                        type="text"
                        className="search-input bg-gray-dark text-white"
                        value={query}
                        placeholder="What do you want to watch?"
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="search-button bg-color-red text-white" onClick={handleSearchClick}>Search</button>
                </div>
            </div>
        </header>
    );
}

export default SearchBar;
