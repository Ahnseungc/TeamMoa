import styled from "styled-components";

export const HomemainLayout = styled.div`
  width: 375px;
  height: 100vh;
  padding-top: 12px;
  & .homeBannerNone {
    margin-top: 113px;
  }
`;

export const HomeBannerHeader = styled.header`
  width: 375px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 160px;
  padding-right: 14px;

  & > button {
    margin-left: 123px;
  }
`;
