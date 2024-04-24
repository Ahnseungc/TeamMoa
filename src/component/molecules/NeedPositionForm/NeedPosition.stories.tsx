import { StoryFn } from "@storybook/react";
import NeedPosistionForm from "./index";
import { EachPosition } from "@type/Tb";

export default {
  title: "Molecules/NeedPosition",
  component: NeedPosistionForm,
};

const Template: StoryFn<EachPosition> = (args: any) => (
  <NeedPosistionForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  needTitle: "프론트",
  needCount: 2,
  needFramework: ["React", "Next"],
};
