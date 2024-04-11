import styled, { css } from "styled-components";

export interface LabelInputType {
  error: string;
}

export const LabelInputLayout = styled.label<LabelInputType>`
  width: 334px;
  height: 60.25px;

  ${(props) =>
    props.error &&
    css`
      & input {
        -webkit-text-stroke: 1px #e43429;
        border: 1px solid #e43429;
      }
    `}
`;

export const LabelHeader = styled.div`
  display: flex;
  margin-bottom: 6.25px;
  align-items: center;
  justify-content: space-between;
  width: 215px;
  height: 18px;
`;

export const LabelText = styled.div`
  font-size: 14.71px;
  font-weight: bold;
`;

export const LabelErrorMessage = styled.div`
  font-size: 11.1px;
  color: #e43429;
  font-weight: 300;
`;
