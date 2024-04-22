import { TextProps } from "@type/Tb";
import styled from "styled-components";

export const HeadingLayout = styled.h3<TextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;
