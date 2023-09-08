import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import SearchBar from './components/SearchBar/SearchBar';
import GenreList from './components/GenreList/GenreList';
import './styles/styles.css';
import './App.css';

function App() {
    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    const [selectedGenre, setSelectedGenre] = useState('All');

    const handleGenreSelect = (genreName) => {
        setSelectedGenre(genreName);
        console.log('Selected genre:', genreName);
    };

    const genreNames = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

    return (
        <div>
            <div>
                <SearchBar initialQuery="Titanic" onSearch={handleSearch} />
            </div>
            <div className='genre-container'>
                <div className='genre-list'>
                    <GenreList
                        genreNames={genreNames}
                        selectedGenre={selectedGenre}
                        onSelect={handleGenreSelect}
                    />
                </div>
            </div>
            <div className='color-white'>
                <Counter initialValue={5} />
            </div>
        </div>
    );
}

export default App;
