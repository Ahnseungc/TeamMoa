import { StoryFn } from "@storybook/react";
import NavBar from ".";

export default {
  title: "Organisms/NavBar",
  component: NavBar,
};

const Template: StoryFn = (args: any) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
