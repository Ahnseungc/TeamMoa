import { StoryFn } from "@storybook/react";

import SignUpSettingSchoolName from "./index";

export default {
  title: "Template/SignUp/SignUpSettingSchoolName",
  component: SignUpSettingSchoolName,
};

const Template: StoryFn = (args: any) => <SignUpSettingSchoolName {...args} />;

export const SignUpSettingSchoolNameDefault = Template.bind({});

SignUpSettingSchoolNameDefault.args = {};
