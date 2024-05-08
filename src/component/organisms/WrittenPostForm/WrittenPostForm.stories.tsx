import { StoryFn } from "@storybook/react";
import WrittenPostForm from ".";
import { PostInfoProps } from "@type/Tb";

export default {
  title: "Organisms/WrittenPostForm",
  component: WrittenPostForm,
};

const Template: StoryFn = (args: any) => (
  <WrittenPostForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
