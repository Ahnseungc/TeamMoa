import { StoryFn } from "@storybook/react";

import SignUpSchoolSettingName from "./index";

export default {
  title: "Template/SignUpSchoolSettingName",
  component: SignUpSchoolSettingName,
};

const Template: StoryFn = (args: any) => <SignUpSchoolSettingName {...args} />;

export const SignUpSchoolSettingNameLayoutDefault = Template.bind({});

SignUpSchoolSettingNameLayoutDefault.args = {};
