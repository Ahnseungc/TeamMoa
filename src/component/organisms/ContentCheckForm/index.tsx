import { StoryFn } from "@storybook/react";
import { ContentCheckFormLayout, Header, InfoLayout, DetailInfo } from "./styles";
import { ContentCheckFormProps } from "@type/Tb";
import Button from "@atom/Button";
import Heading from "@atom/Heading";
import Text from "@atom/Text";

const ContentCheckForm: StoryFn<ContentCheckFormProps> = ({
  name,
  temp,
  callNumber,
  kakaoId,
}) => {
  return (
    <ContentCheckFormLayout>
      <Header>
        <Heading fontSize={"20"} fontWeight={"700"} color={"black"}>
          지원정보확인
        </Heading>
        <Button 
          type={"button"} 
          buttontype={"smallbutton"} 
          disabled={false}
          onClick={() => "d"}
          content="회원정보 수정"/>
      </Header>
      <InfoLayout>
        <Text fontSize={"20"} fontWeight={"700"} color={"#595454"}>
          {`${name}(${temp})`}
        </Text>
      </InfoLayout>
      <InfoLayout>
        <Text fontSize={"20"} fontWeight={"700"} color={"black"}>
          휴대폰
        </Text>
        <DetailInfo>
          <Text fontSize={"20"} fontWeight={"700"} color={"#595454"}>
            {`${callNumber}`}
          </Text>
        </DetailInfo>
      </InfoLayout>
      <InfoLayout>
        <Text fontSize={"20"} fontWeight={"700"} color={"black"}>
          카톡아이디
        </Text>
        <DetailInfo>
          <Text fontSize={"20"} fontWeight={"700"} color={"#595454"}>
          {`${kakaoId}`}
          </Text>
        </DetailInfo>
      </InfoLayout>
    </ContentCheckFormLayout>
  );
};

export default ContentCheckForm;
