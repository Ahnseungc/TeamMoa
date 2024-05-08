import styled from "styled-components";

export const ContentCheckFormLayout = styled.div`
  width: 375px;
  border-bottom: 1px solid black;
  padding: 20px 0;

  & > div {
    padding: 0 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

export const InfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const DetailInfo = styled.div`
  margin-left: 15px;
`;