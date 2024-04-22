import { TextProps } from "@type/Tb";
import { FC } from "react";
import { TextLayout } from "./styles";

const Text: FC<TextProps> = ({ fontSize, fontWeight, color, children }) => {
  return (
    <TextLayout fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </TextLayout>
  );
};

export default Text;
