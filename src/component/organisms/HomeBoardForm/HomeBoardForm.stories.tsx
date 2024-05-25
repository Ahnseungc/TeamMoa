import { StoryFn } from "@storybook/react";
import HomeBoardForm from ".";

export default {
  title: "Organisms/HomeBoardForm",
  component: HomeBoardForm,
};

const Template: StoryFn = (args: any) => <HomeBoardForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
