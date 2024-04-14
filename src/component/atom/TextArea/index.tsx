import { FC } from "react";
import { TextAreaLayout } from "./styles";
import { TextAreaType } from "./styles";

const TextArea: FC<TextAreaType> = ({ Areatype, placeholder }) => {
  return <TextAreaLayout Areatype={Areatype} placeholder={placeholder} />;
};

export default TextArea;
