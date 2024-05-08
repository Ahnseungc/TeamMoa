import { StoryFn } from "@storybook/react";
import UserStackForm from ".";
import { UserStackData } from "@type/Tb";

export default {
  title: "Molecules/UserStackForm",
  component: UserStackForm,
};

const Template: StoryFn<UserStackData> = (args: any) => <UserStackForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  userstack: ["React", "Next.js"],
};
