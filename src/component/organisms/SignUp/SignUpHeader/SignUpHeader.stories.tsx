import { StoryFn } from "@storybook/react";

import SignUpHeader from "./index";

export default {
  title: "organisms/SignUp/SignUpHeader",
  component: SignUpHeader,
};

const Template: StoryFn = (args: any) => <SignUpHeader {...args} />;

export const SignUpHeaderDefault = Template.bind({});

SignUpHeaderDefault.args = {};
