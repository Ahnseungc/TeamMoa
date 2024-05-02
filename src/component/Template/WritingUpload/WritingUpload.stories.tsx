import { StoryFn } from "@storybook/react";
import WritingUpload from ".";

export default {
  title: "Template/WritingUpload",
  component: WritingUpload,
};

const Template: StoryFn = (args: any) => (
  <WritingUpload {...args} />
);

export const Default = Template.bind({});

Default.args = {};
