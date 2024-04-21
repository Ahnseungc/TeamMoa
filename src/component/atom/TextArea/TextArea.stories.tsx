import { StoryFn } from "@storybook/react";
import { TextAreaType } from "@type/Tb";
import TextArea from "./index";

export default {
  title: "Atom/TextAraa",
  component: TextArea,
};

const Template: StoryFn<TextAreaType> = (args: any) => <TextArea {...args} />;

export const TextAreaDefault = Template.bind({});

TextAreaDefault.args = {
  Areatype: "default",
  placeholder: "텍스트입력",
};

export const TextAreaBorderNone = Template.bind({});

TextAreaBorderNone.args = {
  Areatype: "bordernone",
  placeholder: "내용을 입력하세요",
};
