import { StoryFn } from "@storybook/react";
import {
  ApplyInputFormLayout,
  Header,
  HeaderTextLayout,
  ContentInputLayout
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import ApplyAnnounceHeading from "@molecules/ApplyAnnounceHeading";
import ContentInput from "@molecules/ContentInput";

const ApplyInputForm: StoryFn = () => {
  return (
    <ApplyInputFormLayout>
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
            지원하기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <ApplyAnnounceHeading title="HCI 팀원 구합니다."/>
      <ContentInputLayout>
        <ContentInput
          contentTitle="지원자 포트폴리오"
          Areatype="default"
          placeholder="텍스트 입력"/>
        <ContentInput
          contentTitle="전달메시지"
          Areatype="default"
          placeholder="텍스트 입력"/>
      </ContentInputLayout>
      <Button
        type="button"
        buttontype="largebutton"
        content="지원하기"
        disabled={false}
        onClick={() => "ㅇ"}/>
    </ApplyInputFormLayout>
  );
};

export default ApplyInputForm;
