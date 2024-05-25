import { FC } from "react";
import { AlarmInfoFormLayout, AlarmInfoContents, AlarmIcon } from "./styles";
import { AlarmInfoFormProps } from "@type/Tb";
import Heading from "@atom/Heading";
import Text from "@atom/Text";
import AlarmPersonIcon from "@asset/image/icon_AlarmPerson.png";
import AlarmPeopleIcon from "@asset/image/icon_people.png";
import AlarmIdCardIcon from "@asset/image/icon_idcard.png";

const AlarmInfoForm: FC<AlarmInfoFormProps> = ({ title, content, status }) => {
  const getIcon = (status) => {
    switch (status) {
      case "Person":
        return AlarmPersonIcon;
      case "People":
        return AlarmPeopleIcon;
      case "IdCard":
        return AlarmIdCardIcon;
      default:
        return "/";
    }
  };

  const Icon = getIcon(status);

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
      <AlarmIcon src={Icon} alt="알림 아이콘" />
    </AlarmInfoFormLayout>
  );
};

export default AlarmInfoForm;
