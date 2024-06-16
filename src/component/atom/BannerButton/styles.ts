import styled, { css } from "styled-components";

export interface BannerType {
  isActived: boolean;
}

export const defaultStyle = css`
  border-bottom: 1px solid rgba(206, 213, 220, 1);
  & h3 {
    color: rgba(104, 118, 132, 1);
    font-size: 16px;
    font-weight: 400;
  }
`;

export const isActivedStyle = css`
  border-bottom: 1px solid rgba(217, 74, 86, 1);
  & h3 {
    color: rgba(217, 74, 86, 1);
    font-size: 16px;
    font-weight: 700;
  }
`;

export const BannerLayout = styled.button<BannerType>`
  width: 50%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: none;
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
