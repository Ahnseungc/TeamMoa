import { StoryFn } from "@storybook/react";

import SignUpSchoolSettingName from "./index";

export default {
  title: "Template/SignUp/SignUpSettingName",
  component: SignUpSchoolSettingName,
};

const Template: StoryFn = (args: any) => <SignUpSchoolSettingName {...args} />;

export const SignUpSettingNameDefault = Template.bind({});

SignUpSettingNameDefault.args = {};
