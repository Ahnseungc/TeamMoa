import { StoryFn } from "@storybook/react";
import {
  DetailContentLayout,
  Header,
  InfoInputLayout,
  HeaderTextLayout,
  WebSiteLayout,
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import PositionAddForm from "@organisms/PositionAddForm";
import WriteInput from "@molecules/WriteInput";

const DetailContent: StoryFn = () => {
  return (
    <DetailContentLayout>
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
            글쓰기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <InfoInputLayout>
        <PositionAddForm positionCount={1}/>
      </InfoInputLayout>
      <InfoInputLayout>
        <WriteInput
          titleText="프로젝트 마감일"
          id=""
          type="text"
          inputtype="website"
          placeholder="0000년 00월 00일"
          readonly={false}
          disabled={false}
          value=""
          error=""/>
      </InfoInputLayout>
      <WebSiteLayout>
        <WriteInput
          titleText="공모전 웹사이트"
          id=""
          type="text"
          inputtype="website"
          placeholder="웹사이트 삽입 텍스트"
          readonly={false}
          disabled={false}
          value=""
          error=""/>
      </WebSiteLayout>
      <Button
        type="button"
        buttontype="largebutton"
        content="다음"
        disabled={false}
        onClick={() => "ㅇ"}/>
    </DetailContentLayout>
  );
};

export default DetailContent;
