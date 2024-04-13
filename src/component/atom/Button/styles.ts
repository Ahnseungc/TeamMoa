import styled, { css } from "styled-components";

export interface ButtonLayoutType {
  Buttontype: "text" | "icon" | "largebutton" | "addposition" | "middlebutton" | "smallbutton";
}

export const textButtonStyles = css`
  font-size: 20px;
  font-weight: bold;
  color: black;
  border: none;
  background-color: #FFFFFF;
`;

export const iconButtonStyles = css`
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
`;

export const largebuttonStyles = css`
  width: 374px;
  height: 73px;
  background-color: #D9D9D9;
  font-size: 20px;
  border: none;
  color: black;
`;

export const addpositionStyles = css`
  width: 305px;
  height: 26px;
  background-color: #EBEBEB;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  color: #363636;
`;

export const middlebuttonStyles = css`
  width: 189px;
  height: 82px;
  background-color: #D9D9D9;
  font-size: 20px;
  border: none;
  color: black;
`;

export const smallbuttonStyles = css`
  width: 104px;
  height: 28px;
  background-color: #D9D9D9;
  font-size: 15px;
  border: none;
  color: black;
`;

export const ButtonLayout = styled.button<ButtonLayoutType>`
  ${(props) => {
    switch (props.Buttontype) {
      case "text":
        return textButtonStyles;
      case "icon":
        return iconButtonStyles;
      case "largebutton":
        return largebuttonStyles;
      case "addposition":
        return addpositionStyles;
      case "middlebutton":
        return middlebuttonStyles;
      case "smallbutton":
        return smallbuttonStyles;
      default:
        return textButtonStyles;
    }
  }}
`;