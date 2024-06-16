import { StoryFn } from "@storybook/react";
import {
  ContentCheckFormLayout,
  Header,
  InfoLayout,
  DetailInfo,
} from "./styles";
import { ContentCheckFormProps } from "@type/Tb";
import Button from "@atom/Button";
import Heading from "@atom/Heading";
import Text from "@atom/Text";

const ContentCheckForm: StoryFn<ContentCheckFormProps> = ({
  name,
  temp,
  callNumber,
  kakaoId,
  applyStatus,
}) => {
  return (
    <ContentCheckFormLayout>
      <div>
        <Header>
          <Heading fontSize={"20"} fontWeight={"700"} color={"black"}>
            지원정보확인
          </Heading>
          {applyStatus && (
            <Button
              type={"button"}
              buttontype={"userInfoButto"}
              disabled={false}
              onClick={() => "d"}
              content="회원정보 수정"
            />
          )}
        </Header>
        <InfoLayout>
          <span style={{ width: "103px", marginRight: "15px" }}>
            <Text fontSize={"16"} fontWeight={"700"} color={"black"}>
              이름(팀플온도)
            </Text>
          </span>
          <span style={{ marginLeft: "0" }}>
            <Text fontSize={"16"} fontWeight={"400"} color={"black"}>
              {`${name} ${temp}점`}
            </Text>
          </span>
        </InfoLayout>
        <InfoLayout>
          <span style={{ width: "103px", marginRight: "15px" }}>
            <Text fontSize={"16"} fontWeight={"700"} color={"black"}>
              휴대폰
            </Text>
          </span>
          <DetailInfo>
            <Text fontSize={"16"} fontWeight={"400"} color={"black"}>
              {`${callNumber}`}
            </Text>
          </DetailInfo>
        </InfoLayout>
        <InfoLayout>
          <span style={{ width: "103px", marginRight: "15px" }}>
            <Text fontSize={"16"} fontWeight={"700"} color={"black"}>
              카카오톡 아이디
            </Text>
          </span>
          <span style={{ marginLeft: "0" }}>
            <Text fontSize={"16"} fontWeight={"400"} color={"black"}>
              {`${kakaoId}`}
            </Text>
          </span>
        </InfoLayout>
      </div>
    </ContentCheckFormLayout>
  );
};

export default ContentCheckForm;
