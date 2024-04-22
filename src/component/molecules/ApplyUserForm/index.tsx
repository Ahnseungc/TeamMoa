import UserIcon from "@atom/UserIcon";
import Text from "@atom/Text";
import { ApplyUserFormLayout, ApplyUserInfoLayout } from "./styles";
import { FC } from "react";
import { ApplyUserFormProps } from "@type/Tb";

const ApplyUserForm: FC<ApplyUserFormProps> = ({
  src,
  iconSize,
  size,
  color,
  userName,
  userPosition,
  fontWeight,
}) => {
  return (
    <ApplyUserFormLayout>
      <UserIcon src={src} size={iconSize} />
      <ApplyUserInfoLayout>
        <Text color={color} fontSize={size} fontWeight={fontWeight}>
          {`${userName}(${userPosition})`}
        </Text>
      </ApplyUserInfoLayout>
    </ApplyUserFormLayout>
  );
};

export default ApplyUserForm;
