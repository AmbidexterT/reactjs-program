import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieCard from 'components/MovieCard/MovieCard';
import movieImageSrc from 'assets/images/movie1.png';

export default {
  title: 'Components',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <div className="w-1/4">
    <MovieCard {...args} />
  </div>
);

export const MovieItem = Template.bind({});
MovieItem.args = {
  movie: {
    id: 1,
    poster_path: movieImageSrc,
    title: 'X-Man',
    genres: ['Action'],
    release_date: '2004',
    runtime: 160,
    vote_average: 7.8,
    overview: 'Movie about mutants',
  },
};
