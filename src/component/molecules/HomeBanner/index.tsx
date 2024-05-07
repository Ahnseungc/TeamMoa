import BannerButton from "@atom/BannerButton";
import { HomeBannerLayout } from "./styles";
import { HomeBannerProps } from "@type/Tb";
import { FC } from "react";

const HomeBanner: FC<HomeBannerProps> = ({ isactive, onclick }) => {
  return (
    <HomeBannerLayout>
      <BannerButton text={"한림대"} isActive={isactive} onClick={onclick} />
      <BannerButton text={"공모전"} isActive={!isactive} onClick={onclick} />
    </HomeBannerLayout>
  );
};

export default HomeBanner;
