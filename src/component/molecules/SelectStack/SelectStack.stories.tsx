import { StoryFn } from "@storybook/react";
import SelectStack from ".";
import { SelectStackProps } from "@type/Tb";

export default {
  title: "Molecules/SelectStack",
  component: SelectStack,
};

const Template: StoryFn<SelectStackProps> = (args: any) => (
  <SelectStack {...args} />
);

export const Default = Template.bind({});

Default.args = {
  src: "/",
  position: "프론트",
  stack: ["React", "PWA"],
  count: 2,
};
