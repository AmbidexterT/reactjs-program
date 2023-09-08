import React, {HTMLAttributes} from 'react';
import cx from 'classnames';
import { ReactComponent as ArrowDown }  from '../../assets/icons/arrowDown.svg';
import './GenreList.css';

const defaultTabClassName =
    'default-tab border-bottom';

const sortOptions = [
    { name: 'Genres', value: 'genres' },
    { name: 'Rating', value: 'vote_average' },
    { name: 'Release date', value: 'release_date' },
];

interface GenreListProps {
    genreNames: string[];
    selectedGenre: string;
    onSelect: (e: string) => void;
}

const GenreList = ({genreNames, selectedGenre, onSelect}: GenreListProps) => {
    const sortByValue = 'genres';

    const onSortChange = (event: any) => {
    };

    const onFilterClick = (genreName: string) => {
        onSelect(genreName);
    };

    return (
        <nav className={cx('flex-container')}>
            {genreNames.map((genreName: string) => (
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
                    <ArrowDown className="arrow-down" />
                </div>
            </div>
        </nav>
    );
};

export default GenreList;
