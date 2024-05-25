import { FC } from "react";
import { AlarmInfoFormLayout, AlarmInfoContents, AlarmIcon } from "./styles";
import { AlarmInfoFormProps } from "@type/Tb";
import Heading from "@atom/Heading";
import Text from "@atom/Text";
import AlarmPersonIcon from "@asset/icon_AlarmPerson.png";

const AlarmInfoForm: FC<AlarmInfoFormProps> = ({ title, content, icon }) => {
  return (
    <AlarmInfoFormLayout>
      <AlarmInfoContents>
        <Heading fontSize={"16px"} fontWeight={"700"} color={"black"}>
          {title}
        </Heading>
        <Text fontSize={"16px"} fontWeight={"400"} color={"black"}>
          {content}
        </Text>
      </AlarmInfoContents>
      <AlarmIcon src={AlarmPersonIcon} alt="알림 아이콘" />
    </AlarmInfoFormLayout>
  );
};

export default AlarmInfoForm;
