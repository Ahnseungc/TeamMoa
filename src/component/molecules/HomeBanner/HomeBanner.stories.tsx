import { StoryFn } from "@storybook/react";
import HomeBanner from ".";

export default {
  title: "Molecules/HomeBanner",
  component: HomeBanner,
};

const Template: StoryFn = (args: any) => <HomeBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  isactive: false,
};
