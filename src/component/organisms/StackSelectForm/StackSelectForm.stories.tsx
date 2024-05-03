import { StoryFn } from "@storybook/react";
import StackSelectForm from ".";
import { StackSelectFormProps } from "@type/Tb";

export default {
  title: "Organisms/StackSelectForm",
  component: StackSelectForm,
};

const Template: StoryFn<StackSelectFormProps> = (args: any) => (
  <StackSelectForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  StackList: [
    {
      src: "/",
      position: "프론트",
      stack: ["React", "PWA"],
    },
    {
      src: "/",
      position: "백",
      stack: ["JAVA"],
    },
    {
      src: "/",
      position: "디자인",
      stack: ["Figma"],
    },
  ],
};
