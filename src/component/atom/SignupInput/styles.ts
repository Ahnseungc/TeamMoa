import styled, { css } from "styled-components";

export interface ErrorType {
  error: string;
}

export const InputLayout = styled.input<ErrorType>`
  border: none;
  background: #f5f5f5;
  width: 334px;
  height: 36px;
  border-radius: 9.19px;
  padding: 0 0 0 13px;
  font-size: 16px;
  font-weight: 500;
  ${(props) =>
    props.error &&
    css`
      -webkit-text-stroke: 1px #e43429;
      border: 1px solid #e43429;
    `}
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #667080;
  }
`;

export default {
  InputLayout,
};
