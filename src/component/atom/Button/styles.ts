import styled, { css } from "styled-components";

export interface ButtonLayoutType {
  Buttontype:
    | "text"
    | "icon"
    | "largebutton"
    | "addposition"
    | "middlebutton"
    | "smallbutton";
}

export const textButtonStyles = css`
  font-size: 17.84px;
  font-weight: bold;
  color: black;
  border: none;
  background-color: #ffffff;
`;

export const iconButtonStyles = css`
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
`;

export const largebuttonStyles = css`
  width: 330px;
  height: 40px;
  background-color: rgba(252, 252, 254, 1);
  color: rgba(176, 176, 176, 1);
  border: 1px solid rgba(176, 176, 176, 1);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18.4px;

  &:active {
    background-color: rgba(217, 74, 86, 1);
    color: white;
  }
`;

export const addpositionStyles = css`
  width: 100%;
  height: 26px;
  background-color: #ebebeb;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  color: #363636;
`;

export const middlebuttonStyles = css`
  width: 189px;
  height: 82px;
  background-color: #d9d9d9;
  font-size: 20px;
  border: none;
  color: black;
`;

export const smallbuttonStyles = css`
  width: 104px;
  height: 28px;
  background-color: #d9d9d9;
  font-size: 15px;
  border: none;
  color: black;
`;

export const ImageLayout = styled.img`
  width: 15px;
  height: 15px;
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
