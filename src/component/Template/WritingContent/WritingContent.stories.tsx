import { StoryFn } from "@storybook/react";
import WritingContent from ".";

export default {
  title: "Template/WritingContent",
  component: WritingContent,
};

const Template: StoryFn = (args: any) => (
  <WritingContent {...args} />
);

export const Default = Template.bind({});

Default.args = {};
