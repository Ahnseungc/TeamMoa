import styled, { css } from "styled-components";

export interface TextAreaType {
  Areatype: "default" | "bordernone";
  placeholder: string;
}

export const defaultStyle = css`
  width: 332px;
  height: 140px;
  border-radius: 10px;
  padding: 13px 12px;

  &::placeholder {
    font-weight: bold;
    font-size: 20px;
    color: #595454;
  }
`;

export const BorderNoneStyle = css`
  width: 345px;
  height: max-content;
  border: none;
  &::placeholder {
    font-weight: bold;
    font-size: 20px;
    color: #000000;
  }
`;

export const TextAreaLayout = styled.textarea<TextAreaType>`
  ${(props) => {
    switch (props.Areatype) {
      case "default":
        return defaultStyle;
      case "bordernone":
        return BorderNoneStyle;
      default:
        return defaultStyle;
    }
  }}
`;
