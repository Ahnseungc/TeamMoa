import { StoryFn } from "@storybook/react";

import SignUpSettingMajor from "./index";

export default {
  title: "Template/SignUp/SignUpSettingMajor",
  component: SignUpSettingMajor,
};

const Template: StoryFn = (args: any) => <SignUpSettingMajor {...args} />;

export const SignUpSettingMajorDefault = Template.bind({});

SignUpSettingMajorDefault.args = {};
