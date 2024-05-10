import LoginTemplate from "@templates/Login/LoginMainPage";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return <LoginTemplate onclick={() => navigate("/signup")} />;
};

export default LoginPage;
