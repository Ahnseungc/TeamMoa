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
  userName: "안승찬",
  userPosition: "프론트",
  iconSize: "38",
  size: "20px",
  color: "rgba(89, 84, 84, 1)",
  fontWeight: "700",
};
