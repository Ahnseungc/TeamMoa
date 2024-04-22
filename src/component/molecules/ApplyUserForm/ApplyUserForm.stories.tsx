import { StoryFn } from "@storybook/react";
import ApplyUserForm from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Molecules/ApplyUserForm",
  component: ApplyUserForm,
};

const Template: StoryFn = (args: any) => <ApplyUserForm {...args} />;

export const ApplyUserFormDefault = Template.bind({});

ApplyUserFormDefault.args = {
  src: "/",
  size: "38",
  userName: "안승찬",
  userPosition: "프론트",
};
