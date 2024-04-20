import { StoryFn } from "@storybook/react";
import { TextAreaType } from "../../../type/Tb";
import ContentInput from ".";
export interface ContentInputType extends TextAreaType {
  contentTitle: string;
}

export default {
  title: "Molecules/ContentInput",
  component: ContentInput,
};

const Template: StoryFn<ContentInputType> = (args: any) => (
  <ContentInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  contentTitle: "지원자 포트폴리오",
  Areatype: "default",
  placeholder: "텍스트 입력"
};
