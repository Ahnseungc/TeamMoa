import { FC } from "react";
import { LoginMainPageLayout, MainLogo, KaKaoLogin } from "./styles";
import { LoginProps } from "@type/Tb";
import KaKaoLoginIcon from "@asset/image/icon_KaKaoLogin.png";
import MainLogoIcon from "@asset/image/Logo/Logo_mainLogo01.png";
import Heading from "@atom/Heading";

const LoginMainPage: FC<LoginProps> = ({ onclick }) => {
  return (
    <LoginMainPageLayout>
      <Heading fontSize={"24px"} fontWeight={"600"} color={"rgba(0, 0, 0, 1"}>
        팀원을 모집할 땐? <br/> 팀모아
      </Heading>
      <MainLogo src={MainLogoIcon}/>
      <KaKaoLogin src={KaKaoLoginIcon} alt="/" onClick={onclick} />
    </LoginMainPageLayout>
  );
};

export default LoginMainPage;
