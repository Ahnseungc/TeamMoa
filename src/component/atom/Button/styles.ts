import styled, { css } from "styled-components";

export interface ButtonLayoutType {
  Buttontype:
    | "text"
    | "icon"
    | "largebutton"
    | "addposition"
    | "middlebutton"
    | "smallbutton"
    | "largebuttonactive"
    | "posistionbutton"
    | "posistioncompletebutton";
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
  width: 56px;
  height: 56px;
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
  width: 24px;
  height: 24px;
`;

export const largebuttonactiveStyles = css`
  width: 330px;
  height: 40px;
  background-color: rgba(217, 74, 86, 1);
  color: white;
  border: 1px solid rgba(176, 176, 176, 1);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18.4px;
`;

export const posistionbuttonStyles = css`
  width: 46px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(183, 223, 185, 1);
  color: rgba(76, 175, 80, 1);
  border: none;
  font-size: 12px;
`;

export const posistioncompletebuttonStyles = css`
  width: 57px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(176, 176, 176, 1);
  color: rgba(99, 99, 99, 1);
  border: none;
  font-size: 12px;
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
      case "largebuttonactive":
        return largebuttonactiveStyles;
      case "addposition":
        return addpositionStyles;
      case "middlebutton":
        return middlebuttonStyles;
      case "smallbutton":
        return smallbuttonStyles;
      case "posistionbutton":
        return posistionbuttonStyles;
      case "posistioncompletebutton":
        return posistioncompletebuttonStyles;

      default:
        return textButtonStyles;
    }
  }}
`;
