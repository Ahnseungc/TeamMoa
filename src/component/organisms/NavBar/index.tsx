import Button from "@atom/Button";
import Bell from "@asset/image/NavIcon/bell.png";
import Home from "@asset/image/NavIcon/home.png";
import User from "@asset/image/NavIcon/user.png";
import { NavBarLayout } from "./styles";

const NavBar = () => {
  return (
    <NavBarLayout>
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={Home}
        onClick={() => null}
      />
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={Bell}
        onClick={() => null}
      />

      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={User}
        onClick={() => null}
      />
    </NavBarLayout>
  );
};

export default NavBar;
