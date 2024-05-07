import { HomemainLayout, HomeBannerHeader } from "./styles";
import HomeBoardForm from "@organisms/HomeBoardForm";
import HomeBanner from "@molecules/HomeBanner";
import { FC } from "react";
import { HomeBoardData } from "@type/Tb";

const HomeMain: FC<HomeBoardData> = ({ BoardData }) => {
  return (
    <HomemainLayout>
      <HomeBannerHeader></HomeBannerHeader>
      <HomeBanner isactive={false} onclick={() => null} />
      {BoardData.map((data) => {
        return (
          <HomeBoardForm
            name={data.name}
            position={data.position}
            title={data.title}
            date={data.date}
            iscruiting={data.iscruiting}
            subtitle={data.subtitle}
            needposistion={data.needposistion}
          />
        );
      })}
    </HomemainLayout>
  );
};

export default HomeMain;
