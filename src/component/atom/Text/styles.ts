import { TextProps } from "@type/Tb";
import styled from "styled-components";

export const TextLayout = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;
