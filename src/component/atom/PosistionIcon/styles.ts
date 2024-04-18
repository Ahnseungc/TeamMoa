import styled, { css } from "styled-components";

export interface PosistionType {
  PosistionType: "default";
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

  & span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const PosistionIconLayout = styled.div<PosistionType>`
  ${(props) => {
    switch (props.PosistionType) {
      case "default":
        return defaultStyle;
      default:
        return defaultStyle;
    }
  }}
`;
