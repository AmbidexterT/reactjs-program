import React, { useState, HTMLAttributes, ChangeEvent, FormEventHandler } from 'react';
import './SearchBar.css';

interface SearchHeaderProps extends HTMLAttributes<HTMLDivElement> {
    initialQuery: string;
    onSearch: (e: string) => void;
}

function SearchBar ({ initialQuery, onSearch }: SearchHeaderProps) {
    const [query, setQuery] = useState(initialQuery || '');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <header className="search-header">
            <form onSubmit={handleSubmit}>
                <div className="search-container">
                    <label className="search-label text-white">FIND YOUR MOVIE</label>
                    <div className="search-bar-content">
                        <input
                            type="text"
                            className="search-input bg-gray-dark text-white"
                            value={query}
                            placeholder="What do you want to watch?"
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="search-button bg-color-red text-white">Search</button>
                    </div>
                </div>
            </form>
        </header>
    );
}

export default SearchBar;
