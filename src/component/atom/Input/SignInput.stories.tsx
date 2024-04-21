import { StoryFn } from "@storybook/react";
import { InputType } from "@type/Tb";
import SignUpInput from "./index";

export default {
  title: "Atom/Input",
  component: SignUpInput,
};

const Template: StoryFn<InputType> = (args: any) => <SignUpInput {...args} />;

export const Id = Template.bind({});

Id.args = {
  type: "text",
  inputtype: "text",
  // value: "",
  placeholder: "홍길동",
};

export const Password = Template.bind({});

Password.args = {
  type: "password",
  inputtype: "text",
  // value: "1234",
  placeholder: "패스워드를 입력하세요.",
};

export const WebSite = Template.bind({});

WebSite.args = {
  type: "text",
  inputtype: "website",
  // value: "",
  placeholder: "웹사이트 삽입 텍스트",
};

export const TextHeader = Template.bind({});

TextHeader.args = {
  type: "text",
  inputtype: "textheader",
  // value: "",
  placeholder: "제목",
};
