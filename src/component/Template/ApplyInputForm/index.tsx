import { StoryFn } from "@storybook/react";
import { useLocation, useNavigate } from "react-router-dom";
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
import Spinner from "@atom/Spinner";
import { useRecoilState } from "recoil";
import { userAtom } from "src/atom";
import useSWR from "swr";
import fetcher from "src/apis/util/fetcher";

const ApplyInputForm: StoryFn = () => {
  const Navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const userInfo = useRecoilState(userAtom);
  const location = useLocation();
  const { id, name } = location.state || {};

  const { data, isLoading, error } = useSWR(
    () =>
      userInfo
        ? `http://localhost:3000/api/user?kakaoId=${userInfo[0].id}`
        : null,
    fetcher
  );
  const { data: NeedPosistion } = useSWR(
    () =>
      userInfo ? `http://localhost:3000/api/postsDetail?writeid=${name}` : null,
    fetcher
  );

  const onChangeMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onChangePortfolio = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPortfolio(e.target.value);
  };

  // const eventSource = new EventSource(`http://localhost:3000/sse/${name}`);

  // // SSE 이벤트 수신
  // eventSource.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   console.log("Received data:", data);
  // };

  // // SSE 연결이 열렸을 때
  // eventSource.onopen = () => {
  //   console.log("SSE connection opened");
  // };

  // // SSE 연결이 닫혔을 때
  // eventSource.close = () => {
  //   console.log("SSE connection closed");
  // };

  // // SSE 연결 에러가 발생했을 때
  // eventSource.onerror = (error) => {
  //   console.error("SSE connection error:", error);
  // };

  return (
    <>
      {loading && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundColor: "rgba(32, 30, 30, 0.1)",
            zIndex: 1,
          }}
        >
          <Spinner />
        </div>
      )}
      {data && (
        <ApplyInputFormLayout loading={loading}>
          <HeaderTextLayout>
            <Heading
              fontSize="20px"
              fontWeight="400"
              color="rgba(99, 99, 99, 1)"
            >
              지원하기
            </Heading>
          </HeaderTextLayout>
          <ApplyAnnounceHeading title="HCI 팀원 구합니다." />
          <ContentCheckForm
            name={data[0]?.NickName}
            temp={4.5}
            callNumber={"010-0000-0000"}
            kakaoId={"tmdcks12"}
            applyStatus={true}
          />
          {NeedPosistion && (
            <StackSelectForm
              stackList={NeedPosistion[0]?.NeedPosistion}
              applyStatus={true}
            />
          )}

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
              setLoading={setLoading}
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
      )}
    </>
  );
};

export default ApplyInputForm;
