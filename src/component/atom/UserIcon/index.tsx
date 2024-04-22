import { FC } from "react";
import { UserIconLayout } from "./styles";
import { UserIconProps } from "@type/Tb";

interface UserIconPropsAdd extends UserIconProps {
  src: string;
}

const UserIcon: FC<UserIconPropsAdd> = ({ size, src }) => {
  return <UserIconLayout size={size} src={src} />;
  // alt="/"
};

export default UserIcon;
