import { StoryFn } from "@storybook/react";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import {
  ApplyInputFormLayout,
  HeaderTextLayout,
  ContentInputLayout,
  Line,
} from "./styles";
import Button from "@atom/Button";
import Heading from "@atom/Heading";
import ApplyAnnounceHeading from "@molecules/ApplyAnnounceHeading";
import ContentInput from "@molecules/ContentInput";
import ContentCheckForm from "@organisms/ContentCheckForm";
import StackSelectForm from "@organisms/StackSelectForm";
import ConsentText from "@molecules/ConsentText";

const ApplyInputForm: StoryFn = () => {
  const Navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string>("");

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onChangePortfolio = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPortfolio(e.target.value);
  };

  return (
    <ApplyInputFormLayout>
      <HeaderTextLayout>
        <Heading fontSize="20px" fontWeight="400" color="rgba(99, 99, 99, 1)">
          지원하기
        </Heading>
      </HeaderTextLayout>
      <ApplyAnnounceHeading title="HCI 팀원 구합니다." />
      <ContentCheckForm
        name={"홍길동"}
        temp={90}
        callNumber={"010-0000-0000"}
        kakaoId={"asdf1234"}
        applyStatus={true}
      />
      <StackSelectForm
        stackList={[
          {
            position: "프론트",
            stack: ["React", "PWA"],
            count: 2,
          },
          {
            position: "백",
            stack: ["JAVA"],
            count: 1,
          },
          {
            position: "디자인",
            stack: ["Figma"],
            count: 1,
          },
        ]}
        applyStatus={true}
      />
      <ContentInputLayout>
        <ContentInput
          contentTitle={"지원자 포트폴리오"}
          placeholder={"깃허브링크, 노션링크 다양한 경로를 입력해주세요."}
          value={portfolio}
          onchange={onChangePortfolio}
        />
        <Line />
        <ContentInput
          contentTitle={"전달메시지"}
          placeholder={
            "자신을 어필할 수 있도록 지원 포지션에 맞게 스택을 어필해보세요."
          }
          value={message}
          onchange={onChangeMsg}
          setMessage={setMessage}
        />
      </ContentInputLayout>
      <ConsentText />
      <Button
        type={"button"}
        buttontype={"largebuttonactive"}
        content={"지원하기"}
        disabled={false}
        onClick={() => Navigate("/home")}
      />
    </ApplyInputFormLayout>
  );
};

export default ApplyInputForm;
