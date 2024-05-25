import Button from "@atom/Button";
import Bell from "@asset/image/NavIcon/bell.png";
import Home from "@asset/image/NavIcon/home.png";
import User from "@asset/image/NavIcon/user.png";
import { NavBarLayout } from "./styles";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavBarLayout>
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={Home}
        onClick={() => navigate("/home")}
      />
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={Bell}
        onClick={() => navigate("/alarm")}
      />

      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={User}
        onClick={() => navigate("/userinfo ")}
      />
    </NavBarLayout>
  );
};

export default NavBar;
