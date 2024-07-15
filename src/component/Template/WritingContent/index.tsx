import { ChangeEvent, useState } from "react";
import { StoryFn } from "@storybook/react";
import {
  WritingContentLayout,
  Header,
  ContentInputLayout,
  ContentInput,
} from "./styles";
import Button from "@atom/Button";
import CancelIcon from "@asset/image/icon_cancel.png";
import Heading from "@atom/Heading";
import Input from "@atom/Input";
import { useNavigate } from "react-router-dom";

const WritingContent: StoryFn = ({
  setIndex,
  onChangeWriteForm,
  writeForm,
}) => {
  const Navigate = useNavigate();
  return (
    <WritingContentLayout>
      <Header>
        <Button
          type="button"
          buttontype="icon"
          icon={CancelIcon}
          disabled={false}
          onClick={() => Navigate("/home")}
        />
        <Heading fontSize="20px" fontWeight="400" color="#636363">
          글쓰기
        </Heading>
        <Button
          type="button"
          buttontype="smallbutton"
          content="다음"
          disabled={false}
          onClick={() => setIndex(1)}
        />
      </Header>
      <ContentInputLayout>
        <Input
          id="Title"
          value={writeForm.Title}
          type="text"
          inputtype="textheader"
          readonly={false}
          disabled={false}
          onChange={onChangeWriteForm}
          error=""
          placeholder="제목"
        />
        <ContentInput
          id="Detail"
          placeholder="내용을 입력하세요"
          value={writeForm.Detail}
          onChange={onChangeWriteForm}
        />
      </ContentInputLayout>
    </WritingContentLayout>
  );
};

export default WritingContent;
