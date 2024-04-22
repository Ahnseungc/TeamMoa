import { StoryFn } from "@storybook/react";
import { ApplyBoardFormProps } from "@type/Tb";
import ApplyBoardForm from ".";

export default {
  title: "Organisms/ApplyBoardForm",
  component: ApplyBoardForm,
};

const Template: StoryFn<ApplyBoardFormProps> = (args: any) => (
  <ApplyBoardForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  src: "/",
  userName: "안승찬",
  userPosition: "프론트",
  iconSize: "38px",
  writedDate: "0000년 00월 00일",
};
