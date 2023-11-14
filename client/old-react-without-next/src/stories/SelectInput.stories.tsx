import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormSelectInput from 'components/SelectInput';

const testOptions = ['Option1', 'Option2', 'Option3', '...'];

export default {
  title: 'Components',
  component: FormSelectInput,
} as ComponentMeta<typeof FormSelectInput>;

const Template: ComponentStory<typeof FormSelectInput> = (args) => <FormSelectInput {...args} />;

export const SelectInput = Template.bind({});
SelectInput.args = {
  className: 'w-full md:w-1/2',
  label: 'label',
  options: testOptions,
};
