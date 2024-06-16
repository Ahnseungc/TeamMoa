import styled from "styled-components";

export const PositionAddFormLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  & h3:first-child {
    padding-left: 21px;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: row;

  margin: 11px 0 8px 45px;

  & span:first-child {
    margin-left: 0;
    margin-right: 0;
  }

  & span:nth-child(2) {
    margin-left: 46px;
    margin-right: 0;
  }

  & span:last-child {
    margin-left: 109px;
    margin-right: 0;
  }
`;

export const PositionFormContentLayout = styled.div`
  border-top: 0.75px solid #bdbdbd;
  margin: 10px 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
