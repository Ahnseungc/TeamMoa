import { StoryFn } from "@storybook/react";
import SearchForm from ".";

export default {
  title: "Template/SearchForm",
  component: SearchForm,
};

const Template: StoryFn = (args: any) => (
  <SearchForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
