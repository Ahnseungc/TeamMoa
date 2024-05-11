import Button from "@atom/Button";
import { FC } from "react";
import AddText from "@asset/image/icon_AddText.png";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <Button
        type={"button"}
        buttontype={"icon"}
        disabled={false}
        icon={AddText}
        onClick={() => null}
      />
    </div>
  );
};

export default Layout;
