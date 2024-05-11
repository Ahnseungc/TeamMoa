import { StoryFn } from "@storybook/react";

import Layout from "./index";

export default {
  title: "Template/Layout",
  component: Layout,
};

const Template: StoryFn = (args: any) => <Layout {...args} />;

export const LoginPageDefault = Template.bind({});

LoginPageDefault.args = {};
