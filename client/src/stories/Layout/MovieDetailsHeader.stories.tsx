import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderWithDetails from 'layout/MovieDetailsHeader';
import movieImageSrc from 'assets/images/movie1.png';

export default {
  title: 'Components/Layout',
  component: HeaderWithDetails,
} as ComponentMeta<typeof HeaderWithDetails>;

const Template: ComponentStory<typeof HeaderWithDetails> = (args) => <HeaderWithDetails {...args} />;

export const MovieDetailsHeader = Template.bind({});
MovieDetailsHeader.args = {
  movie: {
    imageSource: movieImageSrc,
    title: 'Kill Bill 2',
    genre: 'Action',
    years: 2004,
    duration: 200,
    rating: 7.8,
    description: 'This movie is just for test purpose',
  },
};
