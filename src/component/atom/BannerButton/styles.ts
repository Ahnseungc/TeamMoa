import styled, { css } from "styled-components";

export interface BannerType {
  isActived: boolean;
}

export const defaultStyle = css`
  background-color: rgba(217, 217, 217, 0.2);

  & h3 {
    color: rgba(89, 84, 84, 0.5);
    font-size: 20px;
    font-weight: 700;
  }
`;

export const isActivedStyle = css`
  background-color: rgba(102, 112, 128, 1);

  & h3 {
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: 700;
  }
`;

export const BannerLayout = styled.button<BannerType>`
  width: 186px;
  height: 53px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  ${(props) => {
    switch (props.isActived) {
      case true:
        return isActivedStyle;
      case false:
        return defaultStyle;
      default:
        return defaultStyle;
    }
  }}
`;
