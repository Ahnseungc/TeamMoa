import { StoryFn } from "@storybook/react";
import {
  WritingUploadLayout,
  Header,
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import WritingBoardForm from "@organisms/WritingBoardForm";
import WritingNeedPosition from "@organisms/WritingNeedPosition";

const WritingUpload: StoryFn = () => {
    const NeedPosition = [
    {
      needTitle: "프론트",
      needCount: 2,
      needFramework: ["React", "Next"],
    },
    {
      needTitle: "백",
      needCount: 1,
      needFramework: ["Spring"],
    },
    {
      needTitle: "디자인",
      needCount: 1,
      needFramework: ["Figma"],
    },
  ];

  return (
    <WritingUploadLayout>
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
          content="완료" 
          disabled={false} 
          onClick={() => "ㅇ"}/>
      </Header>
      <WritingBoardForm
        src="/"
        userName="홍길동"
        userPosition="프론트"
        iconSize="38px"
        writedDate="0000년 00월 00일"
        size="20px"
        color="#000000"
        fontWeight="700"/>
      <WritingNeedPosition NeedPosition={NeedPosition}/>
      <Button
        type="button"
        buttontype="largebutton"
        content="업로드"
        disabled={false}
        onClick={() => "ㅇ"}/>
    </WritingUploadLayout>
  );
};

export default WritingUpload;
