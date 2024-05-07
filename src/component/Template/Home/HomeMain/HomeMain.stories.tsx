import { StoryFn } from "@storybook/react";
import { HomeBoardData } from "@type/Tb";
import HomeMain from ".";

export default {
  title: "Template/HomeMain",
  component: HomeMain,
};

const Template: StoryFn<HomeBoardData> = (args: any) => <HomeMain {...args} />;

export const Default = Template.bind({});

Default.args = {
  BoardData: [
    {
      name: "홍길동",
      position: "프론트엔드",
      title: "김성우 교수님 HCI 프로젝트 모집",
      date: "2024-05-03",
      iscruiting: false,
      subtitle:
        "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
      needposistion: [
        { name: "프론트엔드", count: 2 },
        { name: "백엔드", count: 1 },
        { name: "기획", count: 2 },
      ],
    },
    {
      name: "홍길동",
      position: "프론트엔드",
      title: "김성우 교수님 HCI 프로젝트 모집",
      date: "2024-05-03",
      iscruiting: false,
      subtitle:
        "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
      needposistion: [
        { name: "프론트엔드", count: 2 },
        { name: "백엔드", count: 1 },
        { name: "기획", count: 2 },
      ],
    },
    {
      name: "홍길동",
      position: "프론트엔드",
      title: "김성우 교수님 HCI 프로젝트 모집",
      date: "2024-05-03",
      iscruiting: false,
      subtitle:
        "팀원을 모으는 서비스를 주제로 HCI수업에서 함께할학우를 찾습니다!",
      needposistion: [
        { name: "프론트엔드", count: 2 },
        { name: "백엔드", count: 1 },
        { name: "기획", count: 2 },
      ],
    },
  ],
};
