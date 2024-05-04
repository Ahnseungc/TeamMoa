import { StoryFn } from "@storybook/react";

import LoginPage from "./index";

export default {
  title: "Template/LoginPage",
  component: LoginPage,
};

const Template: StoryFn = (args: any) => <LoginPage {...args} />;

export const LoginPageDefault = Template.bind({});

LoginPageDefault.args = {};
