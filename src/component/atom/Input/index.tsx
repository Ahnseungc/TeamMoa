import { FunctionComponent } from "react";
import { InputLayout } from "./styles";
import { InputType } from "../../../type/Tb";

const SignUpInput: FunctionComponent<InputType> = ({
  placeholder,
  readonly,
  disabled,
  error,
  type,
  inputtype,
  ...others
}) => {
  return (
    <InputLayout
      type={type}
      placeholder={placeholder}
      readOnly={readonly}
      disabled={disabled}
      error={error}
      Inputtype={inputtype}
      {...others}
    />
  );
};

export default SignUpInput;
