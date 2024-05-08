import styled from "styled-components";

export const UserStackFormLayout = styled.div`
  width: 375px;
  height: 164px;
  border-bottom: 0.75px solid rgba(189, 189, 189, 1);
  padding-top: 16px;

  & > div {
    margin-left: 15px;
  }
`;

export const StackListLayout = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    & > div:not(:last-child) {
    margin-right: 5px;
  }
`;

export const ButtonLayout = styled.button`
  width: 33px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid black;
  background-color: #D9D9D9;
  margin-left: 8px;
`;
