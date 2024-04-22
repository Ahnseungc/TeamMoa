import { StoryFn } from "@storybook/react";
import { TextProps } from "@type/Tb";
import Text from ".";

export default {
  title: "Atom/Text",
  component: Text,
};

const Template: StoryFn<TextProps> = (args: any) => <Text {...args} />;

export const TextDefault = Template.bind({});

TextDefault.args = {
  fontSize: "20px",
  color: "rgba(89, 84, 84, 1)",
  fontWeight: "700",
};
