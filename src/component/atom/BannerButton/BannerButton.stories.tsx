import { StoryFn } from "@storybook/react";
import { BannerType } from "@type/Tb";
import BannerButton from ".";

export default {
  title: "Atom/Banner",
  component: BannerButton,
};

const Template: StoryFn<BannerType> = (args: any) => <BannerButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "한림대",
  isActive: false,
};

export const IsActived = Template.bind({});

IsActived.args = {
  text: "공모전",
  isActive: true,
};
