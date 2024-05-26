import styled from "styled-components";

export const PositionAddFormLayout = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;

  & h3:first-child {
    padding: 0 12px;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0 8px 36px;

  & span:first-child {
    margin-left: 10px;
  }

  & span:nth-child(2) {
    margin-left: 40px;
  }

  & span:last-child {
    margin-left: 105px;
  }
`;

export const PositionFormContentLayout = styled.div`
  border-top: 0.75px solid #BDBDBD;
  margin: 10px 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;