import { StoryFn } from "@storybook/react";
import DetailContent from ".";

export default {
  title: "Template/DetailContent",
  component: DetailContent,
};

const Template: StoryFn = (args: any) => (
  <DetailContent {...args} />
);

export const Default = Template.bind({});

Default.args = {};
