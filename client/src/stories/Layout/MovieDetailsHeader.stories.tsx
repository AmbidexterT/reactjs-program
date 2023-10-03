import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderWithDetails from 'layout/MovieDetailsHeader/MovieDetailsHeader';
import movieImageSrc from 'assets/images/movie1.png';

export default {
  title: 'Components/Layout',
  component: HeaderWithDetails,
} as ComponentMeta<typeof HeaderWithDetails>;

const Template: ComponentStory<typeof HeaderWithDetails> = (args) => <HeaderWithDetails {...args} />;

export const MovieDetailsHeader = Template.bind({});
MovieDetailsHeader.args = {
  movie: {
    id: 1,
    poster_path: movieImageSrc,
    title: 'Kill Bill 2',
    genres: ['Action'],
    release_date: '2004',
    runtime: 200,
    vote_average: 7.8,
    overview: 'This movie is just for test purpose',
  },
};
