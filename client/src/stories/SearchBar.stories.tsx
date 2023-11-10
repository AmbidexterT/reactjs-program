import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from 'components/SearchBar/SearchBar';

export default {
  title: 'Components/Layout',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const HeaderWithSearch = Template.bind({});
HeaderWithSearch.args = {};
