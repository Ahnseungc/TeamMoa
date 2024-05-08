import { StoryFn } from "@storybook/react";
import UserProfile from ".";
import { PostInfoData } from "@type/Tb";

export default {
  title: "Template/UserProfile",
  component: UserProfile,
};

const Template: StoryFn<PostInfoData> = (args: any) => (
  <UserProfile {...args} />
);

export const Default = Template.bind({});

Default.args = {
  PostInfo: [
    {
      title: "게시글 제목",
      subtitle: "게시글 맨 처음에 보이는 어쩌고 저쩌고 모집합니다!",
      iscruiting: true,
      needposistion: [
        { name: "프론트엔드", count: 3 },
        { name: "백엔드", count: 3 },
        { name: "디자인", count: 2 },
      ],
    },
  ]
};
