import styled, { css } from "styled-components";

export interface PosistionType {
  PosistionType: "default" | "HomePosistion" | "MyPagePosistion";
}

export const defaultStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & h3 {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
`;

export const HomePosistionStyle = css`
  width: 97px;
  height: 22px;

  border-radius: 11px;
  background-color: rgba(236, 236, 236, 1);
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

export const MyPagePosistion = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 22px;
  border-radius: 11px;
  background-color: rgba(236, 236, 236, 1);

  & h3 {
    font-size: 12px;
    font-weight: 400;
    color: rgba(104, 118, 132, 1);
  }
`;

export const PosistionIconLayout = styled.div<PosistionType>`
  ${(props) => {
    switch (props.PosistionType) {
      case "default":
        return HomePosistionStyle;
      case "HomePosistion":
        return HomePosistionStyle;
      case "MyPagePosistion":
        return MyPagePosistion;
      default:
        return HomePosistionStyle;
    }
  }}
`;
