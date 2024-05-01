import { StoryFn } from "@storybook/react";
import {
  WritingContentLayout,
  Header,
  ContentInputLayout,
  ContentInput
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import Input from "@atom/Input";

const WritingContent: StoryFn = () => {
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
        <Heading fontSize="20px" fontWeight="600" color="rgba(0,0,0,1)">
          글쓰기
        </Heading>
        <Button 
          type="button" 
          buttontype="text" 
          content="중간저장" 
          disabled={false} 
          onClick={() => "ㅇ"}/>
      </Header>
      <ContentInputLayout>
        <Input 
          id=""
          value=""
          type="text" 
          inputtype="textheader" 
          readonly={false}
          disabled={false}
          error=""
          placeholder="제목"/>
        <ContentInput placeholder="내용을 입력하세요"/>
      </ContentInputLayout>
      <Button
        type="button"
        buttontype="largebutton"
        content="다음"
        disabled={false}
        onClick={() => "ㅇ"}/>
    </WritingContentLayout>
  );
};

export default WritingContent;
