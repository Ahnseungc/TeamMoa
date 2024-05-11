import { FunctionComponent } from "react";
import { ButtonLayout, ImageLayout } from "./styles";
import { ButtonType } from "@type/Tb";

const Button: FunctionComponent<ButtonType> = ({
  type,
  buttontype,
  disabled,
  content,
  onClick,
  icon,
  size,
}) => {
  return (
    <ButtonLayout
      type={type}
      Buttontype={buttontype}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <ImageLayout src={icon} sizes={size} />}
      {content}
    </ButtonLayout>
  );
};

export default Button;
