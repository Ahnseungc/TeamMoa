import Button from "@atom/Button";

import AddText from "@asset/image/icon_AddText.png";
import NavBar from "@organisms/NavBar";
import { FC } from "react";
import { DefaultLayout } from "./styles";

const Layout: FC = () => {
  return (
    <DefaultLayout>
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={AddText}
        onClick={() => null}
      />
      <NavBar />
    </DefaultLayout>
  );
};

export default Layout;
