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
// import { useNavigate } from "react-router-dom";

const WritingContent: StoryFn = () => {
  // const navigate = useNavigate();

  return (
    <WritingContentLayout>
      <Header>
        <Button
          type="button"
          buttontype="icon"
          icon={CancelIcon}
          disabled={false}
          onClick={() => 'navigate("/writeupload")'}/>
        <Heading fontSize="20px" fontWeight="400" color="#636363">
          글쓰기
        </Heading>
        <Button
          type="button"
          buttontype="text"
          content="다음"
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
    </WritingContentLayout>
  );
};

export default WritingContent;
