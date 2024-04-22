import { StoryFn } from "@storybook/react";
import { TextProps } from "@type/Tb";
import Heading from "./";

export default {
  title: "Atom/Heading",
  component: Heading,
};

const Template: StoryFn<TextProps> = (args: any) => <Heading {...args} />;

export const HeadingDefault = Template.bind({});

HeadingDefault.args = {
  fontSize: "20px",
  color: "rgba(89, 84, 84, 1)",
  fontWeight: "700",
};
