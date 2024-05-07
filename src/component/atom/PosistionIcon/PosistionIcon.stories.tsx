import { StoryFn } from "@storybook/react";
import { PosistionType } from "@type/Tb";
import PosistionIcon from "./index";

export default {
  title: "Atom/Position",
  component: PosistionIcon,
};

const Template: StoryFn<PosistionType> = (args: any) => (
  <PosistionIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "React",
  PosistionType: "default",
};

export const Position = Template.bind({});

Position.args = {
  name: "React",
  PosistionType: "HomePosistion",
  count: 2,
};
