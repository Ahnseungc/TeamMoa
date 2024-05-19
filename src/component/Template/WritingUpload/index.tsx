import { StoryFn } from "@storybook/react";
import { 
  WritingUploadLayout, 
  Header, 
  HeaderTextLayout, 
  ButtonLayout,
  Line
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import WritingBoardForm from "@organisms/WritingBoardForm";
import WritingNeedPosition from "@organisms/WritingNeedPosition";
import { useNavigate } from "react-router-dom";

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
  const Navigate = useNavigate();

  return (
    <WritingUploadLayout>
      <Header>
        <Button 
          type="button" 
          buttontype="icon" 
          icon={BackIcon} 
          disabled={false} 
          onClick={() => Navigate("/writedetailcontent")}/>
        <HeaderTextLayout>
          <Heading fontSize="20px" fontWeight="400" color="#636363">
            글쓰기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <WritingBoardForm
        src="/"
        userName="홍길동"
        userPosition="프론트"
        iconSize="38px"
        writedDate="0000년 00월 00일"
        size="20px"
        color="#000000"
        fontWeight="700"
        fontSize=""
        headingSize=""
        headingColor=""
        headingWeight=""
        textColor=""
        textSize=""
        children=""
      />
      <Line/>
      <WritingNeedPosition NeedPosition={NeedPosition} />
      <Line/>
      <ButtonLayout>
        <Button
          type="button"
          buttontype="largebuttonactive"
          content="업로드"
          disabled={false}
          onClick={() => Navigate("/home")}
        />
      </ButtonLayout>
    </WritingUploadLayout>
  );
};

export default WritingUpload;
