import { StoryFn } from "@storybook/react";

import LoginMainPage from "./index";

export default {
  title: "Template/LoginMainPage",
  component: LoginMainPage,
};

const Template: StoryFn = (args: any) => <LoginMainPage {...args} />;

export const LoginPageDefault = Template.bind({});

LoginPageDefault.args = {};
