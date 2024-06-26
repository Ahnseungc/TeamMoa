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
    | "posistioncompletebutton"
    | "largebuttondisable"
    | "userInfoButto"
    | "gptButton"
    | "largeAddbutton";
}

export const textButtonStyles = css`
  font-size: 17.84px;
  font-weight: 400;
  color: rgba(104, 118, 132, 1);
  border: none;
  background-color: #ffffff;
`;

export const iconButtonStyles = css`
  width: 24px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
`;

export const largebuttonStyles = css`
  width: 327px;
  height: 50px;
  background-color: rgba(252, 252, 254, 1);
  color: rgba(176, 176, 176, 1);
  border: 1px solid rgba(176, 176, 176, 1);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18.4px;

  /* &:active {
    background-color: rgba(217, 74, 86, 1);
    color: white;
  } */
`;
export const largebuttonAddStyles = css`
  width: 329px;
  height: 35px;
  background-color: rgba(252, 252, 254, 1);
  color: rgba(176, 176, 176, 1);
  border: 1px solid rgba(176, 176, 176, 1);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 18.4px;
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
  height: 26px;
  padding: 0 12.57px;
  background-color: rgba(217, 74, 86, 1);
  font-size: 13px;
  font-weight: 500;
  border-radius: 25px;
  border: none;
  color: white;
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

export const largebuttondisableStyle = css`
  width: 330px;
  height: 40px;
  background-color: rgba(176, 176, 176, 1);
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
  padding: 2px 6px;
  border-radius: 5px;
  background-color: rgba(183, 223, 185, 1);
  color: rgba(76, 175, 80, 1);
  border: none;
  font-size: 12px;
`;

export const gptButtonStyles = css`
  width: 105px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 5px;
  background-color: rgba(183, 223, 185, 1);
  color: rgba(76, 175, 80, 1);
  border: none;
  font-size: 12px;
`;
export const userInfoButtoStyles = css`
  width: 82px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px 2px 6px;
  border-radius: 5px;
  background-color: rgba(176, 176, 176, 1);
  color: rgba(99, 99, 99, 1);
  font-weight: 400;
  border: none;
  font-size: 12px;
`;

export const posistioncompletebuttonStyles = css`
  width: 57px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 5px;
  background-color: rgba(176, 176, 176, 1);
  color: rgba(99, 99, 99, 1);
  border: none;
  font-size: 12px;
`;

export const ImageLayout = styled.img<{ sizes: string }>`
  width: ${(props) => (props.sizes ? props.sizes : "24px")};
  height: ${(props) => (props.sizes ? props.sizes : "24px")};
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
      case "largebuttondisable":
        return largebuttondisableStyle;
      case "userInfoButto":
        return userInfoButtoStyles;
      case "gptButton":
        return gptButtonStyles;
      case "largeAddbutton":
        return largebuttonAddStyles;

      default:
        return textButtonStyles;
    }
  }}
`;
