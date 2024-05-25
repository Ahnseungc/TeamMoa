import { TextProps } from "@type/Tb";
import { FC } from "react";
import { HeadingLayout } from "./styles";

const Heading: FC<TextProps> = ({ fontSize, fontWeight, color, children }) => {
  return (
    <HeadingLayout fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </HeadingLayout>
  );
};

export default Heading;
