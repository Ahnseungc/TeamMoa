import { StoryFn } from "@storybook/react";
import EvaluationItem from "./index";

export default {
  title: "Molecules/EvaluationItem",
  component: EvaluationItem,
};

const Template: StoryFn = (args: any) => (
  <EvaluationItem {...args} />
);

export const Default = Template.bind({});

Default.args = {};
