import Button from "@atom/Button";
import Bell from "@asset/image/NavIcon/bell.png";
import Home from "@asset/image/NavIcon/home.png";
import User from "@asset/image/NavIcon/user.png";
import BellActive from "@asset/image/NavIcon/bell_active.png";
import HomeActive from "@asset/image/NavIcon/home_active.png";
import UserActive from "@asset/image/NavIcon/user_active.png";
import { NavBarLayout } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(1);

  return (
    <NavBarLayout>
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={active === 1 ? HomeActive : Home}
        onClick={() => (navigate("/home"), setActive(1))}
      />
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={active === 2 ? BellActive : Bell}
        onClick={() => (navigate("/alarm"), setActive(2))}
      />

      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={active === 3 ? UserActive : User}
        onClick={() => (navigate("/userinfo"), setActive(3))}
      />
    </NavBarLayout>
  );
};

export default NavBar;
