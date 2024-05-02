import { StoryFn } from "@storybook/react";
import {
  WritingContentLayout,
  Header,
  HeaderTextLayout,
  NoticeTextLayout,
  ContentText
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";

const NoticeGuideForm: StoryFn = () => {
  return (
    <WritingContentLayout>
      <Header>
        <Button 
          type="button" 
          buttontype="icon" 
          icon={BackIcon} 
          disabled={false} 
          // onClick 지금 어떻게 넣어둬야 할지 몰라서 일단 이렇게 해뒀습니다..!
          onClick={() => "ㅇ"}/>
        <HeaderTextLayout>
          <Heading fontSize="20px" fontWeight="600" color="rgba(0,0,0,1)">
            한림대학교
          </Heading>
        </HeaderTextLayout>
      </Header>
      <NoticeTextLayout>
        <ContentText>지원하기 전 확인하세요!</ContentText>
      </NoticeTextLayout>
      <Button
        type="button"
        buttontype="largebutton"
        content="지원하기"
        disabled={false}
        onClick={() => "ㅇ"}/>
    </WritingContentLayout>
  );
};

export default NoticeGuideForm;
