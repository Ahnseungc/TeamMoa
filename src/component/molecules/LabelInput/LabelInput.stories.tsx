import { StoryFn } from "@storybook/react";
import { InputType } from "@type/Tb";
import LabelInput from ".";
export interface LabeInputType extends InputType {
  labelText: string;
}

export default {
  title: "Molecules/LabelInput",
  component: LabelInput,
};

const Template: StoryFn<LabeInputType> = (args: any) => (
  <LabelInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  labelText: "비밀번호 확인",
  type: "password",
  inputtype: "password",
  value: "password",
  placeholder: "홍길동",
  error: "비밀번호가 일치하지 않습니다",
};
