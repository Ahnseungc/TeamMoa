import { FC } from "react";
import Button from "@atom/Button";
import { ButtonType, InputType } from "@type/Tb";
import { PositionInfoInputLayout } from "./styles";
import { InputLayout } from "@atom/Input/styles";

export interface PositionInfoInputType
  extends Omit<InputType, "type">,
    Omit<ButtonType, "type"> {
  iptype: InputType["type"];
  btntype: ButtonType["type"];
  writeForm: any;
  onChangeWriteForm: any;
  index?: number;
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
  index,
  content,
  writeForm,
  onChangeWriteForm,
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
        id={`NeedPosistionName${index}`}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        Inputtype={inputtype}
        value={writeForm.NeedPosistionName}
        onChange={onChangeWriteForm}
        style={{
          width: "92px",
          height: "26px",
          marginLeft: "0",
          marginRight: "0",
        }}
      />
      <InputLayout
        type={iptype}
        id={`NeedPosistionSkill${index}`}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        Inputtype={inputtype}
        value={writeForm.NeedPosistionSkill}
        onChange={onChangeWriteForm}
        style={{
          width: "159px",
          height: "26px",
          marginLeft: "10px",
          marginRight: "0",
        }}
      />
      <InputLayout
        type={iptype}
        id={`NeedPosistionNumber${index}`}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        Inputtype={inputtype}
        value={writeForm.NeedPosistionNumber}
        onChange={onChangeWriteForm}
        style={{
          width: "25px",
          height: "26px",
          marginLeft: "8px",
          marginRight: "0",
        }}
      />
    </PositionInfoInputLayout>
  );
};

export default PositionInfoInput;
