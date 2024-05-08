import { StoryFn } from "@storybook/react";
import ContactApplicants from ".";

export default {
  title: "Template/ContactApplicants",
  component: ContactApplicants,
};

const Template: StoryFn = (args: any) => (
  <ContactApplicants {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "HCI 팀원 구합니다.",
  name: "홍길동",
  temp: 90,
  callNumber: "010-0000-0000",
  kakaoId: "asdf1234",
  stackList: [
    {
      src: "/",
      position: "프론트",
      stack: ["React", "PWA"],
    },
  ],
  portfolio: "github 링크",
  message: "잘 부탁드립니다.",
};
