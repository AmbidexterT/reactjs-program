import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieCard from 'components/MovieCard';
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
    title: 'X-Man',
    imageSource: movieImageSrc,
    description: 'Movie about mutants',
    years: 2016,
    rating: 7.8,
    duration: 160,
    genre: 'Action',
  },
};
