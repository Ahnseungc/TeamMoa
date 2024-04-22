import { FC } from "react";
import Input from "@atom/Input";
import { InputType } from "@type/Tb";
import { WriteInputLayout, WriteHeader, Line } from "./styles";
import Heading from "@atom/Heading";

export interface WriteInputType extends InputType {
  titleText: string;
}

const WriteInput: FC<WriteInputType> = ({
  titleText,
  id,
  type,
  value,
  error,
  inputtype,
  placeholder,
  readonly,
  disabled,
}) => {
  return (
    <WriteInputLayout>
      <WriteHeader>
        <Heading fontSize="20px" fontWeight="bold" color="black">
          {titleText}
        </Heading>
      </WriteHeader>
      <Line />
      <Input
        id={id}
        type={type}
        readonly={readonly}
        disabled={disabled}
        inputtype={inputtype}
        placeholder={placeholder}
        value={value}
        error={error}
      />
    </WriteInputLayout>
  );
};

export default WriteInput;
