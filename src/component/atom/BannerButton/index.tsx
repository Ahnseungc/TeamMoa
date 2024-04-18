import { FC } from "react";
import { BannerType } from "../../../type/Tb";
import { BannerLayout } from "./styles";

const BannerButton: FC<BannerType> = ({ text, isActive, onClick }) => {
  return (
    <BannerLayout isActived={isActive} onClick={onClick}>
      <h3>{text}</h3>
    </BannerLayout>
  );
};

export default BannerButton;
