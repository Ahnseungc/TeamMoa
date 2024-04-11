import { FC } from "react";
import KaKaoLogin from "react-kakao-login";

const SignIn: FC = () => {
  const kakaoKey = "3eb698081391d6acf1c0b1a85aaff884";

  const kakaoOnSuccess = async (data: any) => {
    console.log(data);
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };

  return (
    <div>
      <KaKaoLogin
        token={kakaoKey}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </div>
  );
};

export default SignIn;
