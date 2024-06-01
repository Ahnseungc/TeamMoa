import styled, { css } from "styled-components";

export interface SignupInputType {
  Inputtype: "text" | "password" | "website" | "textheader";
  error: string;
}

export const textStyles = css`
  width: 339px;
  height: 35px;
  border-width: 0 0 1px;
  border-color: rgba(189, 189, 189, 1);
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 20px;
    font-weight: 500;
    line-height: 28.92px;
    color: rgba(99, 99, 99, 1);
  }
`;

export const websiteStyles = css`
  width: 337px;
  height: 48px;
  border-radius: 9.19px;
  border: none;
  padding: 0 0 0 13px;
  font-size: 16px;
  font-weight: 500;
  background: rgba(235, 235, 235, 0.5);
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: #667080;
  }
`;

export const TextHeadStyles = css`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  width: 339px;
  height: 36px;
  font-size: 20px;
  font-weight: 400;
  background-color: white;
  outline: none;
  color: #636363;

  &::placeholder {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const InputLayout = styled.input<SignupInputType>`
  ${(props) =>
    props.error &&
    css`
      -webkit-text-stroke: 1px #e43429;
      border: 1px solid #e43429;
    `}

  ${(props) => {
    switch (props.Inputtype) {
      case "text":
        return textStyles;
      case "password":
        return textStyles;
      case "website":
        return websiteStyles;
      case "textheader":
        return TextHeadStyles;
      default:
        return textStyles;
    }
  }}
`;
