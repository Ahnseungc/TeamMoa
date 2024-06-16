import Button from "@atom/Button";
import AddText from "@asset/image/icon_AddText.png";
import NavBar from "@organisms/NavBar";
import { FC } from "react";
import { DefaultLayout } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";

const Layout: FC = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <Outlet />
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={AddText}
        size="56px"
        onClick={() => navigate("/writecontent")}
      />
      <NavBar />
    </DefaultLayout>
  );
};

export default Layout;
