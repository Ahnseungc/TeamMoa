import { StoryFn } from "@storybook/react";
import NoticeGuideForm from ".";

export default {
  title: "Template/NoticeGuideForm",
  component: NoticeGuideForm,
};

const Template: StoryFn = (args: any) => (
  <NoticeGuideForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
