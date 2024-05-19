import styled from "styled-components";

export const EvaluationFormLayout = styled.table`
  padding-top: 14px;
  padding-left: 24px;
  margin: 0;
  width: 100%;
  height: 137px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  & tr {
    display: flex;
    justify-content: space-between;
    min-width: 155px;
    max-width: max-content;
    margin: 0;
    align-items: center;
  }
`;

export const EvaluationFormLine = styled.tr`
  display: flex;

  &:not(:first-child) {
    margin-top: 7px;
  }

  & span {
    /* margin: 0; */
  }

  & th {
    text-align: start;
    margin: 0;
    width: max-content;
  }
`;
