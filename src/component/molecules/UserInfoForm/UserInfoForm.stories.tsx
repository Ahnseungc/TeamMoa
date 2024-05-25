import { StoryFn } from "@storybook/react";
import UserInfoForm from ".";
import { UserInfoProps } from "@type/Tb";

export default {
  title: "Molecules/UserInfoForm",
  component: UserInfoForm,
};

const Template: StoryFn<UserInfoProps> = (args: any) => <UserInfoForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "홍길동",
  major: "빅데이터",
  studentnumber: 20203351,
  temp: 0
};
