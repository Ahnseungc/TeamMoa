import { UserInfoFormLayout, UserInfoLayout } from "./styles";
import { UserInfoProps } from "@type/Tb";
import { StoryFn } from "@storybook/react";
import Text from "@atom/Text";
import UserIcon from "@atom/UserIcon";

const UserInfoForm: StoryFn<UserInfoProps> = ({
  name,
  major,
  studentnumber,
  temp,
}) => {
  return (
    <UserInfoFormLayout>
      <div>
        <UserIcon size={"94"} src="/"/>
        <UserInfoLayout>
          <Text fontSize={"20"} fontWeight={"700"} color={"black"}>
            {name}
          </Text>
          <Text fontSize={"20"} fontWeight={"700"} color={"black"}>
            {`${major}(${studentnumber})`}
          </Text>
        </UserInfoLayout>
        <Text fontSize={"20"} fontWeight={"700"} color={"black"}>
          {temp}
        </Text>
      </div>
    </UserInfoFormLayout>
  );
};

export default UserInfoForm;
