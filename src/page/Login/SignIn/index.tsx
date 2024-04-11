const SignIn = () => {
  const Restapi_Key = process.env.REACT_APP_REST_API_KEY;
  const Redirect_Uri = process.env.REACT_APP_REDIRECT_URI;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Restapi_Key}&redirect_uri=${Redirect_Uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  return (
    <div>
      로그인 페이지
      <button onClick={handleLogin}>로그인 버튼</button>
    </div>
  );
};

export default SignIn;
