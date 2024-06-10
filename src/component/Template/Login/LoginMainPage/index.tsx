import { FC } from "react";
import { LoginMainPageLayout, IntroText, MainLogo, KaKaoLogin } from "./styles";
import { LoginProps } from "@type/Tb";
import KaKaoLoginIcon from "@asset/image/icon_KaKaoLogin.png";
import MainLogoIcon from "@asset/image/Logo/Logo_mainLogo01.png";
import Heading from "@atom/Heading";

const LoginMainPage: FC<LoginProps> = ({ onclick }) => {
  return (
    <LoginMainPageLayout>
      <IntroText>팀원을 모집할 땐? <br/> 팀모아</IntroText>
      <MainLogo src={MainLogoIcon}/>
      <KaKaoLogin src={KaKaoLoginIcon} alt="/" onClick={onclick} />
    </LoginMainPageLayout>
  );
};

export default LoginMainPage;
