import { useState, ChangeEvent } from "react";
import { StoryFn } from "@storybook/react";
import { useNavigate } from "react-router-dom";
import {
  DetailContentLayout,
  Header,
  InfoInputLayout,
  HeaderTextLayout,
  ButtonLayout,
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import PositionAddForm from "@organisms/PositionAddForm";
import WriteInput from "@molecules/WriteInput";

const DetailContent: StoryFn = ({
  setIndex,
  writeForm,
  onChangeWriteForm,
  setWriteForm,
}) => {
  return (
    <DetailContentLayout>
      <Header>
        <Button
          type="button"
          buttontype="icon"
          icon={BackIcon}
          disabled={false}
          onClick={() => setIndex(0)}
        />
        <HeaderTextLayout>
          <Heading fontSize="20px" fontWeight="400" color="#636363">
            글쓰기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <InfoInputLayout>
        <PositionAddForm
          positionCount={1}
          writeForm={writeForm}
          onChangeWriteForm={onChangeWriteForm}
          setWriteForm={setWriteForm}
        />
      </InfoInputLayout>
      <InfoInputLayout>
        <WriteInput
          titleText="프로젝트 마감일"
          id="ExpireDate"
          type="text"
          inputtype="textheader"
          placeholder="마감일"
          readonly={false}
          disabled={false}
          value={writeForm.ExpireDate}
          onChange={onChangeWriteForm}
          error=""
        />
      </InfoInputLayout>
      <InfoInputLayout>
        <WriteInput
          titleText="공모전 웹사이트"
          id="WebSiteUri"
          type="text"
          inputtype="textheader"
          placeholder="웹사이트 주소"
          readonly={false}
          disabled={false}
          value={writeForm.WebSiteUri}
          onChange={onChangeWriteForm}
          error=""
        />
      </InfoInputLayout>
      <ButtonLayout>
        <Button
          type="button"
          buttontype="largebuttonactive"
          content="계속하기"
          disabled={false}
          onClick={() => setIndex(2)}
        />
      </ButtonLayout>
    </DetailContentLayout>
  );
};

export default DetailContent;
