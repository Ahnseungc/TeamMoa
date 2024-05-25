import { StoryFn } from "@storybook/react";
import { ContentCheckFormProps } from "@type/Tb";
import ContentCheckForm from ".";

export default {
  title: "Organisms/ContentCheckForm",
  component: ContentCheckForm,
};

const Template: StoryFn<ContentCheckFormProps>= (args: any) => <ContentCheckForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "홍길동",
  temp: 90,
  callNumber: "010-0000-0000",
  kakaoId: "asdf1234",
  applyStatus: true,
};