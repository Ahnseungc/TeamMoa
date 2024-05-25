import UserIcon from "@atom/UserIcon";
import Text from "@atom/Text";
import { WritingUserFormLayout, WritingUserInfoLayout } from "./styles";
import { FC } from "react";
import { WritingUserFormProps } from "@type/Tb";

const WritingUserForm: FC<WritingUserFormProps> = ({
  src,
  iconSize,
  size,
  color,
  userName,
  userPosition,
  fontWeight,
}) => {
  return (
    <WritingUserFormLayout>
      {/* <UserIcon src={src} size={iconSize} /> */}
      <WritingUserInfoLayout>
        <Text color={color} fontSize={size} fontWeight={fontWeight}>
          {`${userName}(${userPosition})`}
        </Text>
      </WritingUserInfoLayout>
    </WritingUserFormLayout>
  );
};

export default WritingUserForm;
