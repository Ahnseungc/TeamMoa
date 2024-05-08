import { StoryFn } from "@storybook/react";
import {
  ContactApplicantsLayout,
  Header,
  HeaderTextLayout,
  ContentInputLayout,
  ContentLayout,
} from "./styles";
import Button from "@atom/Button";
import BackIcon from "@asset/image/icon_back.png";
import Heading from "@atom/Heading";
import ApplyAnnounceHeading from "@molecules/ApplyAnnounceHeading";
import ContentCheckForm from "@organisms/ContentCheckForm";
import StackSelectForm from "@organisms/StackSelectForm";

const ContactApplicants: StoryFn = ({
  title,
  name,
  temp,
  callNumber,
  kakaoId,
  stackList,
  portfolio,
  message,
}) => {
  return (
    <ContactApplicantsLayout>
      <Header>
        <Button 
          type="button" 
          buttontype="icon" 
          icon={BackIcon} 
          disabled={false} 
          onClick={() => "ㅇ"}/>
        <HeaderTextLayout>
          <Heading fontSize={"20"} fontWeight={"600"} color={"rgba(0,0,0,1)"}>
            지원하기
          </Heading>
        </HeaderTextLayout>
      </Header>
      <ApplyAnnounceHeading title={title}/>
      <ContentCheckForm 
        name={name}
        temp={temp}
        callNumber={callNumber}
        kakaoId={kakaoId}
        applyStatus={false}/>
      <StackSelectForm 
        stackList={stackList}
        applyStatus={false}/>
      <ContentInputLayout>
        <div>
          <ContentLayout>
            <Heading fontSize={"20"} fontWeight={"700"} color={"rgba(0,0,0,1)"}>
              지원자 포트폴리오
            </Heading>
            <Heading fontSize={"20"} fontWeight={"700"} color={"#595454"}>
              {portfolio}
            </Heading>
          </ContentLayout>
          <ContentLayout>
            <Heading fontSize={"20"} fontWeight={"700"} color={"rgba(0,0,0,1)"}>
              전달메시지
            </Heading>
            <Heading fontSize={"20"} fontWeight={"700"} color={"#595454"}>
              {message}
            </Heading>
          </ContentLayout>
        </div>
      </ContentInputLayout>
      <Button
        type={"button"}
        buttontype={"largebutton"}
        content={"연락하기"}
        disabled={false}
        onClick={() => "ㅇ"}/>
    </ContactApplicantsLayout>
  );
};

export default ContactApplicants;
