import UserIcon from "@atom/UserIcon";
import Text from "@atom/Text";
import { ApplyUserFormLayout, ApplyUserInfoLayout } from "./styles";
import { FC } from "react";
import { ApplyUserFormProps } from "@type/Tb";

const ApplyUserForm: FC<ApplyUserFormProps> = ({
  src,
  size,
  userName,
  userPosition,
}) => {
  return (
    <ApplyUserFormLayout>
      <UserIcon src={src} size={size} />
      <ApplyUserInfoLayout>
        <Text color="rgba(89, 84, 84, 1)" fontSize="20px" fontWeight="700">
          {`${userName}(${userPosition})`}
        </Text>
      </ApplyUserInfoLayout>
    </ApplyUserFormLayout>
  );
};

export default ApplyUserForm;
