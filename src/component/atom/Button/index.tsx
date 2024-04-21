import { FunctionComponent } from "react";
import { ButtonLayout } from "./styles";
import { ButtonType } from "@type/Tb";

const Button: FunctionComponent<ButtonType> = ({
  type,
  buttontype,
  disabled,
  content,
  onClick,
  icon,
}) => {
  return (
    <ButtonLayout
      type={type}
      Buttontype={buttontype}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <img src={icon} />}
      {content}
    </ButtonLayout>
  );
};

export default Button;
