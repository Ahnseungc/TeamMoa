import KaKaoLogin from "react-kakao-login";

const SignIn = () => {
  const kakaoKey = "3eb698081391d6acf1c0b1a85aaff884";

  const kakaoOnSuccess = async (data: object) => {
    console.log(data);
  };
  const kakaoOnFailure = (error: any) => {
    console.log(error);
  };

  return (
    <div>
      로그인 페이지
      <KaKaoLogin
        token={kakaoKey}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </div>
  );
};

export default SignIn;
