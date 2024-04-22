import { StoryFn } from "@storybook/react";
import { ApplyBoardFormProps } from "@type/Tb";
import HomeBoardForm from ".";

export default {
  title: "Organisms/HomeBoardForm",
  component: HomeBoardForm,
};

const Template: StoryFn<ApplyBoardFormProps> = (args: any) => (
  <HomeBoardForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
