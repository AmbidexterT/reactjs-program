import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieActionModal from 'components/Modals/MovieFormModal';

export default {
  title: 'Components/Modals',
  component: MovieActionModal,
} as ComponentMeta<typeof MovieActionModal>;

const Template: ComponentStory<typeof MovieActionModal> = (args) => <MovieActionModal {...args} />;

export const MovieFormModal = Template.bind({});
MovieFormModal.args = {
  isOpen: true,
  title: 'Add movie',
};
