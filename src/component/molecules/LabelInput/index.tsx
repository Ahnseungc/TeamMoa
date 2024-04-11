import { FC } from "react";
import Input from "../../atom/Input";
import { InputType } from "../../../type/Tb";
import {
  LabelInputLayout,
  LabelErrorMessage,
  LabelText,
  LabelHeader,
} from "./styles";

export interface LabeInputType extends InputType {
  labelText: string;
  labelId: string;
}

const LabelInput: FC<LabeInputType> = ({
  placeholder,
  readonly,
  disabled,
  error,
  type,
  inputtype,
  id,
  value,
  labelText,
  labelId,
}) => {
  return (
    <LabelInputLayout error={error} htmlFor={labelId}>
      <LabelHeader>
        <LabelText>{labelText}</LabelText>
        {error && <LabelErrorMessage>{error}</LabelErrorMessage>}
      </LabelHeader>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        readonly={readonly}
        disabled={disabled}
        error={error}
        inputtype={inputtype}
        value={value}
      />
    </LabelInputLayout>
  );
};

export default LabelInput;
