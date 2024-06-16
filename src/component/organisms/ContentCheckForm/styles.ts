import styled from "styled-components";

export const ContentCheckFormLayout = styled.div`
  width: 375px;
  border-bottom: 0.75px solid rgba(236, 236, 236, 1);
  padding: 18px 0 15px 0;
`;

export const Header = styled.div`
  width: 375px;
  display: flex;
  flex-direction: row;
  padding: 0 20px 31px 20px;

  & button {
    margin-right: 0;
  }
`;

export const InfoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 0 20px 15px 20px;

  & span:nth-child(1) {
    margin-left: 0;
  }

  & span:nth-child(2) {
    margin-right: 0;
  }
`;

export const DetailInfo = styled.div`
  /* width: 103; */
  /* margin-right: 15px; */
  margin-left: 0;
`;
