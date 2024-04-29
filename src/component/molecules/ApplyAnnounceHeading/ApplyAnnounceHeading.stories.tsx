import ApplyAnnounceHeading from ".";
import { StoryFn } from "@storybook/react";
import { ApplyAnnounceHeadingProps } from "@type/Tb";

export default {
  title: "Molecules/ApplyAnnounceHeading",
  component: ApplyAnnounceHeading,
};

const Template: StoryFn<ApplyAnnounceHeadingProps> = (args: any) => (
  <ApplyAnnounceHeading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "팀원 모으는 공고",
};
