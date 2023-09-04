import React from 'react';
import cx from 'classnames';
import ArrowDown from '../../assets/icons/arrowDown.svg';
import useQuery from '../../hooks/useQuery';
import './GenreList.css';

const defaultTabClassName =
    'default-tab border-bottom';

const sortOptions = [
    { name: 'Genres', value: 'genres' },
    { name: 'Rating', value: 'vote_average' },
    { name: 'Release date', value: 'release_date' },
];

const GenreList = ({ className, genreNames, selectedGenre, onSelect }) => {
    const sortByValue = 'genres';

    const onSortChange = (event) => {
    };

    const onFilterClick = (genreName) => {
        onSelect(genreName);
    };

    return (
        <nav className={cx('flex-container', className)}>
            {genreNames.map((genreName) => (
                <span
                    key={genreName}
                    className={cx(defaultTabClassName, {
                        'border-primary text-primary': selectedGenre === genreName,
                        'text-white': selectedGenre !== genreName,
                    })}
                    onClick={() => onFilterClick(genreName)}
                >
                    {genreName}
                </span>
            ))}
            <span className="space-elem  border-bottom"></span>
            <span className="sort-label border-bottom">
                Sort by
            </span>
            <div className="select-box border-bottom text-white">
                <select
                    className='text-white'
                    onChange={onSortChange}
                    defaultValue={sortByValue || 'genres'}
                >
                    {sortOptions.map((sortOption, index) => (
                        <option key={index} value={sortOption.value}>
                            {sortOption.name}
                        </option>
                    ))}
                </select>
                <div className="select-arrow-custom">
                    <img src={ArrowDown} className="arrow-down" />
                </div>
            </div>
        </nav>
    );
};

export default GenreList;
