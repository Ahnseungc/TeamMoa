import LoginTemplate from "@templates/Login/LoginMainPage";
import { Link } from "react-router-dom";

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const KaKaoLoginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginPage = () => {
  const LoginHandler = () => {
    window.location.href = KaKaoLoginLink;
  };
  return (
    // <Link to={"http://localhost:3000/auth/kakao"}>
    <LoginTemplate onclick={() => LoginHandler()} />
    // </Link>
  );
};

export default LoginPage;
