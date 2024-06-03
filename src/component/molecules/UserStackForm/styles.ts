import styled from "styled-components";

export const UserStackFormLayout = styled.div`
  width: 375px;
  height: 100px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  padding-top: 13px;
  padding-left: 15px;
`;

export const StackListLayout = styled.div`
  display: flex;
  margin-top: 17px;
  margin-left: 2px;

  & div {
    margin: 0;
  }

  & div:not(:first-child) {
    margin-left: 10px;
  }

  /* & > div:not(:last-child) {
    margin-right: 5px;
  } */
`;

export const ButtonLayout = styled.button`
  width: 34px;
  height: 22px;
  border-radius: 11px;
  border: 1px solid rgba(236, 236, 236, 1);
  margin-left: 8px;

  & span {
    color: rgba(104, 118, 132, 1);
  }
`;
