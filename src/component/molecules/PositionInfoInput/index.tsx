import { FC } from "react";
import Button from "@atom/Button";
import { ButtonType, InputType } from "@type/Tb";
import { PositionInfoInputLayout } from "./styles";
import { InputLayout } from "@atom/Input/styles";

export interface PositionInfoInputType extends Omit<InputType, "type">, Omit<ButtonType, "type">  {
  iptype: InputType["type"];
  btntype: ButtonType["type"];
}

const PositionInfoInput: FC<PositionInfoInputType> = ({
  iptype,
  btntype,
  buttontype,
  inputtype,
  disabled,
  readonly,
  id,
  error,
  value,
  placeholder,
  onClick,
  icon,
  content
}) => {
  return (
    <PositionInfoInputLayout>
      <Button
        type={btntype}
        content={content}
        buttontype={buttontype}
        disabled={disabled}
        onClick={onClick}
        icon={icon}
      />
      <InputLayout
        type={iptype}
        id={id}
        placeholder={placeholder}
        // readonly={readonly}
        disabled={disabled}
        error={error}
        Inputtype={inputtype}
        value={value}
        style={{
          width: "92px",
          marginLeft: "10px"
        }}
      />
      <InputLayout
        type={iptype}
        id={id}
        placeholder={placeholder}
        // readonly={readonly}
        disabled={disabled}
        error={error}
        Inputtype={inputtype}
        value={value}
        style={{
          width: "159px",
          margin: "0 10px",
        }}
      />
      <InputLayout
        type={iptype}
        id={id}
        placeholder={placeholder}
        // readonly={readonly}
        disabled={disabled}
        error={error}
        Inputtype={inputtype}
        value={value}
        style={{
          width: "25px"
        }}
      />
    </PositionInfoInputLayout>
  );
};

export default PositionInfoInput;