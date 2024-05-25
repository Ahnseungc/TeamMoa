import { FC } from "react";
import Input from "@atom/Input";
import { InputType } from "@type/Tb";
import { WriteInputLayout, WriteHeader } from "./styles";
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
  onChange,
}) => {
  return (
    <WriteInputLayout>
      <WriteHeader>
        <Heading fontSize="20px" fontWeight="700" color="black">
          {titleText}
        </Heading>
      </WriteHeader>
      <Input
        id={id}
        type={type}
        readonly={readonly}
        disabled={disabled}
        inputtype={inputtype}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
    </WriteInputLayout>
  );
};

export default WriteInput;
