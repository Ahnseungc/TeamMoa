import { StoryFn } from "@storybook/react";
import ApplyInputForm from ".";

export default {
  title: "Template/ApplyInputForm",
  component: ApplyInputForm,
};

const Template: StoryFn = (args: any) => (
  <ApplyInputForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
