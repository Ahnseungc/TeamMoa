import { FC } from "react";
import { LoginMainPageLayout, KaKaoLogin } from "./styles";
import { LoginProps } from "@type/Tb";
import KaKaoLoginIcon from "@asset/image/icon_KaKaoLogin.png";

const LoginMainPage: FC<LoginProps> = ({ onclick }) => {
  return (
    <LoginMainPageLayout>
      <KaKaoLogin src={KaKaoLoginIcon} alt="/" onClick={onclick} />
    </LoginMainPageLayout>
  );
};

export default LoginMainPage;
