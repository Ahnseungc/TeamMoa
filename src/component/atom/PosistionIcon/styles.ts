import styled, { css } from "styled-components";

export interface PosistionType {
  PosistionType: "default" | "HomePosistion";
}

export const defaultStyle = css`
  width: 122px;
  height: 32px;
  border: 1px solid black;
  border-radius: 16px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const HomePosistionStyle = css`
  width: 97px;
  height: 22px;

  border-radius: 11px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    color: rgba(104, 118, 132, 1);
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -2%;
  }
`;

export const PosistionIconLayout = styled.div<PosistionType>`
  ${(props) => {
    switch (props.PosistionType) {
      case "default":
        return defaultStyle;
      case "HomePosistion":
        return HomePosistionStyle;
      default:
        return defaultStyle;
    }
  }}
`;
