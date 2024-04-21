import { StoryFn } from "@storybook/react";
import { InputType } from "@type/Tb";
import WriteInput from ".";

export interface WriteInputType extends InputType {
  titleText: string;
}

export default {
  title: "Molecules/WriteInput",
  component: WriteInput,
};

const Template: StoryFn<WriteInputType> = (args: any) => (
  <WriteInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  titleText: "프로젝트 마감일",
  inputtype: "website",
  placeholder: "0000년 00월 00일",
};
