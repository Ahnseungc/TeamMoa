import { StoryFn } from "@storybook/react";
import { InputType } from "../../../type/Tb";
import Input from "./index";

export default {
  title: "Atom/Input",
  component: Input,
};

const Template: StoryFn<InputType> = (args: any) => <Input {...args} />;

export const Id = Template.bind({});

Id.args = {
  type: "text",
  value: "",
  placeholder: "홍길동",
};

export const Password = Template.bind({});

Password.args = {
  type: "password",
  value: "1234",
  placeholder: "패스워드를 입력하세요.",
};
