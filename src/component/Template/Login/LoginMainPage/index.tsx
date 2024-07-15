import { FC } from "react";
import {
  LoginMainPageLayout,
  KaKaoLogin,
  TeamMoa,
  LoginMainPageLayoutHeader,
  TeamMoaDesktopLogo,
} from "./styles";
import { LoginProps } from "@type/Tb";
import KaKaoLoginIcon from "@asset/image/kakao_login_large_wide.png";
import TeamMoaDesktop from "@asset/image/TeamMoa_desktop.png";
import Heading from "@atom/Heading";
import TeamMoaLogo from "@asset/image/TeamMoa_D.png";

const LoginMainPage: FC<LoginProps> = ({ onclick }) => {
  return (
    <LoginMainPageLayout>
      <LoginMainPageLayoutHeader>
        <div>
          <Heading
            fontSize={"32px"}
            fontWeight={"600"}
            color={"rgba(0, 0, 0, 1)"}
          >
            팀원을 모집할 땐?
          </Heading>
        </div>
        <Heading
          fontSize={"32px"}
          fontWeight={"600"}
          color={"rgba(0, 0, 0, 1)"}
        >
          팀모아
        </Heading>
        <TeamMoaDesktopLogo src={TeamMoaDesktop} alt="팀 모아" />
      </LoginMainPageLayoutHeader>
      <TeamMoa src={TeamMoaLogo} alt="팀 모아" />

      <KaKaoLogin src={KaKaoLoginIcon} alt="/" onClick={onclick} />
    </LoginMainPageLayout>
  );
};

export default LoginMainPage;
