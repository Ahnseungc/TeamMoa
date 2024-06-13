import LoginTemplate from "@templates/Login/LoginMainPage";

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const KaKaoLoginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginPage = () => {
  const LoginHandler = () => {
    window.location.href = KaKaoLoginLink;
  };
  return <LoginTemplate onclick={LoginHandler} />;
};

export default LoginPage;
