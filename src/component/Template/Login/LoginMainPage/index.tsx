import { FC } from "react";
import { LoginMainPageLayout, KaKaoLogin } from "./styles";
import { LoginProps } from "@type/Tb";

const LoginMainPage: FC<LoginProps> = ({ onclick }) => {
  return (
    <LoginMainPageLayout>
      <KaKaoLogin
        src="https://s3-alpha-sig.figma.com/img/3c54/26cd/843bba902e62ee798afaf9796e982d10?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHXalpXh9mbdUUagT863ctuJX41EWU49irbsLSNNav8KXiWJb9sVZHb3iZMB-m2CHfzD7z4Hjnfcj1onzh~5UoCJqY60SfvWOUfWn6xDv16pcTsz-SSMmdY7DBeiya3W3~Roji6eGuHAVTI9PjPyWU2Rk5AdCIbrgHBfb27ro7NxtR8LMZMiso38UXeePh5qD2P9gChPNwNHS63fA6cWByw5Pys9Yq8kuDBZ~K~AggjKWYUZJUiC3PE1LmmQexWNNa7GwpJCijPkiFSLjI4Dxtxz8so0RE~~ZH2KwUfw5U8u-RR-AFgrF9N08FaL3Jm2njg80-icBDPGZ1uvdY~V-g__"
        alt="/"
        onClick={onclick}
      />
    </LoginMainPageLayout>
  );
};

export default LoginMainPage;
