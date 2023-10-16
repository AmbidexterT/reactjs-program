import React from 'react';
import Input from 'components/Input/Input';
import SelectInput from 'components/SelectInput';
import Button from 'components/Button/Button';
import { Movie } from '../../types/film.model';
import { genres } from '../../mocks/data';

interface MovieFormProps {
  movie?: Movie;
  onSubmit: () => void;
  onReset: () => void;
}

const MovieForm = ({ movie, onSubmit, onReset }: MovieFormProps) => (
  <form className="w-full" onSubmit={onSubmit}>
    <div className="flex flex-wrap -mx-3 mb-4">
      <Input
        className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
        label="Title"
        type="text"
        placeholder="Movie title"
        defaultValue={movie?.title}
      />
      <Input
        className="w-full sm:w-1/3 px-3"
        label="Release date"
        type="date"
        placeholder="Select Date"
        defaultValue={movie?.release_date}
      />
    </div>
    <div className="flex flex-wrap -mx-3 mb-4">
      <Input
        className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
        label="Movie url"
        type="text"
        placeholder="https://"
        defaultValue={movie?.poster_path}
      />
      <Input
        className="w-full sm:w-1/3 px-3"
        label="Rating"
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="7.8"
        defaultValue={movie?.vote_average}
      />
    </div>
    <div className="flex flex-wrap -mx-3 mb-4">
      <SelectInput
        className="w-full sm:w-2/3 px-3 mb-6 md:mb-0"
        label="Genre"
        options={genres}
        defaultValue={movie?.genres}
      />
      <Input
        className="w-full sm:w-1/3 px-3 mb-6 md:mb-0"
        label="runtime"
        placeholder="minutes"
        type="number"
        step="1"
        min="1"
        defaultValue={movie?.runtime}
      />
    </div>
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-xs font-bold mb-2 upper-case text-primary">Overview</label>
        <textarea
          defaultValue={movie?.overview}
          className="appearance-none w-full bg-gray80 border-gray80 text-white border rounded py-2 px-4 mb-3
            leading-tight focus:outline-none focus:border-gray-200 resize-none"
          name="overview"
          placeholder="Movie description"
          rows={6}
        />
      </div>
    </div>
    <div className="flex flex-row w-full">
      <Button
        buttonTitle="Reset"
        className="ml-auto mr-4"
        variant="outline-primary"
        size="medium"
        type="reset"
        onClick={onReset}
      />
      <Button
        buttonTitle={movie ? 'Edit' : 'Submit'}
        variant="primary"
        size="medium"
      />
    </div>
  </form>
);

export default MovieForm;
