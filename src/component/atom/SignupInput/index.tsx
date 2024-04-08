import { FunctionComponent } from "react";
import { InputLayout } from "./styles";
import { InputType } from "../../../type/Tb";

const Input: FunctionComponent<InputType> = ({
  placeholder,
  readonly,
  disabled,
  error,
  type,
  ...others
}) => {
  return (
    <InputLayout
      type={type}
      placeholder={placeholder}
      readOnly={readonly}
      disabled={disabled}
      error={error}
      {...others}
    />
  );
};

export default Input;
