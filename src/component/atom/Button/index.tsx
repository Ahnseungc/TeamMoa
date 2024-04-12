import { FunctionComponent } from "react";
import { ButtonLayout } from "./styles";
import { ButtonType } from "../../../type/Tb";

const Button: FunctionComponent<ButtonType> = ({
  type,
  buttontype,
  disabled,
  content,
  onClick,
}) => {
  return (
    <ButtonLayout
      type={type}
      Buttontype={buttontype}
      disabled={disabled}
      onClick={onClick}>
      {content}
    </ButtonLayout>
  );
};

export default Button;
