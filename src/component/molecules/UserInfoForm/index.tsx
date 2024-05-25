import { UserInfoFormLayout, UserInfoLayout } from "./styles";
import { UserInfoProps } from "@type/Tb";
import { StoryFn } from "@storybook/react";
import Text from "@atom/Text";
import UserIcon from "@atom/UserIcon";

const UserInfoForm: StoryFn<UserInfoProps> = ({
  name,
  schoolName,
  studentnumber,
  temp,
}) => {
  return (
    <UserInfoFormLayout>
      <UserIcon size={"94"} src="/" />
      <UserInfoLayout>
        <div>
          <Text fontSize={"16px"} fontWeight={"700"} color={"black"}>
            이름
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"} color={"black"}>
            {name}
          </Text>
        </div>
        <div>
          <Text fontSize={"16px"} fontWeight={"700"} color={"black"}>
            학교
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"} color={"black"}>
            {schoolName}
          </Text>
        </div>
        <div>
          <Text fontSize={"16px"} fontWeight={"700"} color={"black"}>
            학과(학번)
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"} color={"black"}>
            {studentnumber}
          </Text>
        </div>
      </UserInfoLayout>
    </UserInfoFormLayout>
  );
};

export default UserInfoForm;
