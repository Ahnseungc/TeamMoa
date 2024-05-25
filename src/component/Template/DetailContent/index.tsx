import { useState, ChangeEvent } from "react";
import { StoryFn } from "@storybook/react";
import { useNavigate } from "react-router-dom";
import {
  DetailContentLayout,
  Header,
  InfoInputLayout,
  HeaderTextLayout,
  ButtonLayout
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import PositionAddForm from "@organisms/PositionAddForm";
import WriteInput from "@molecules/WriteInput";

const DetailContent: StoryFn = () => {
  const [date, setDate] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const Navigate = useNavigate();

  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const onChangeWebsite = (e: ChangeEvent<HTMLInputElement>) => {
    setWebsite(e.target.value);
  };

  return (
    <DetailContentLayout>
      <Header>
        <Button 
          type="button" 
          buttontype="icon" 
          icon={BackIcon} 
          disabled={false} 
          onClick={() => Navigate("/writecontent")}/>
        <HeaderTextLayout>
          <Heading fontSize="20px" fontWeight="400" color="#636363">
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
            inputtype="textheader"
            placeholder="마감일"
            readonly={false}
            disabled={false}
            value={date}
            onChange={onChangeDate}
            error=""/>
      </InfoInputLayout>
      <InfoInputLayout>
        <WriteInput
          titleText="공모전 웹사이트"
          id=""
          type="text"
          inputtype="textheader"
          placeholder="웹사이트 주소"
          readonly={false}
          disabled={false}
          value={website}
          onChange={onChangeWebsite}
          error=""/>
      </InfoInputLayout>
      <ButtonLayout>
        <Button
          type="button"
          buttontype="largebuttonactive"
          content="계속하기"
          disabled={false}
          onClick={() => Navigate("/writeupload")}/>
      </ButtonLayout>
    </DetailContentLayout>
  );
};

export default DetailContent;
