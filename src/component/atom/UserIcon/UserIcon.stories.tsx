import { StoryFn } from "@storybook/react";

import UserIcon from "./index";

export default {
  title: "Atom/UserICon",
  component: UserIcon,
};

const Template: StoryFn = (args: any) => <UserIcon {...args} />;

export const UserIconDefault = Template.bind({});

UserIconDefault.args = {
  src: "/",
  size: "38",
};
