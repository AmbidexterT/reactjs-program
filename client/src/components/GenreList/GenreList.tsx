import React, { ChangeEvent } from 'react';
import cx from 'classnames';
import { sortOptions } from '../../mocks/data';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg';
import './GenreList.css';

const defaultTabClassName =
  'default-tab border-bottom';

export interface GenreListProps {
  genreNames: string[];
  selectedGenre: string;
  onGenreChange: (e: string) => void;
  onSortChange: (e: string) => void;
}

const GenreList = ({ genreNames, selectedGenre, onGenreChange, onSortChange }: GenreListProps) => {
  const sortByValue = 'genres';

  const onSortingChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  const onFilterClick = (genreName: string) => {
    onGenreChange(genreName);
  };

  return (
    <nav className={cx('flex-container')}>
      {genreNames.map((genreName: string) => (
        <span
          key={genreName}
          className={cx(defaultTabClassName, {
            'primary-border primary-text': selectedGenre === genreName,
            'white-text': selectedGenre !== genreName,
          })}
          onClick={() => onFilterClick(genreName)}
        >
                    {genreName}
                </span>
      ))}
      <span className="space-elem border-bottom"></span>
      <span className="sort-label border-bottom">
                Sort by
            </span>
      <div className="select-box border-bottom white-text">
        <select
          className='white-text'
          onChange={onSortingChange}
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
