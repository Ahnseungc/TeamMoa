import { StoryFn } from "@storybook/react";

import SignUpSuccess from "./index";

export default {
  title: "Template/SignUp/SignUpSuccess",
  component: SignUpSuccess,
};

const Template: StoryFn = (args: any) => <SignUpSuccess {...args} />;

export const SignUpSuccessDefault = Template.bind({});

SignUpSuccessDefault.args = {};
