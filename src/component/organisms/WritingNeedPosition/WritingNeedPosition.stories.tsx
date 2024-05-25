import { StoryFn } from "@storybook/react";
import WritingNeedPosition from ".";
import { WritingNeedPositionProps } from "@type/Tb";

export default {
  title: "Organisms/WritingNeedPosition",
  component: WritingNeedPosition,
};

const Template: StoryFn<WritingNeedPositionProps> = (args: any) => (
  <WritingNeedPosition {...args} />
);

export const Default = Template.bind({});

Default.args = {
  NeedPosition: [
    {
      needTitle: "프론트",
      needCount: 2,
      needFramework: ["React", "Next"],
    },
    {
      needTitle: "백",
      needCount: 1,
      needFramework: ["Spring"],
    },
    {
      needTitle: "디자인",
      needCount: 1,
      needFramework: ["Figma"],
    },
  ],
};
