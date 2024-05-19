import { StoryFn } from "@storybook/react";
import ConsentText from ".";

export default {
  title: "Molecules/ConsentText",
  component: ConsentText,
};

const Template: StoryFn = (args: any) => (
  <ConsentText {...args} />
);

export const Default = Template.bind({});

Default.args = {};
