import UserIcon from "@atom/UserIcon";
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
        {`${userName}(${userPosition})`}
      </ApplyUserInfoLayout>
    </ApplyUserFormLayout>
  );
};

export default ApplyUserForm;
