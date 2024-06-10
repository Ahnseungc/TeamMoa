import styled from "styled-components";

export const LoginMainPageLayout = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  & h3 {
    padding-top: 83px;
    line-height: 40px;
    margin-right: 160px;
  }
`;

export const MainLogo = styled.img`
  width: 260px;
  height: 260px;
  transform: rotate(-15deg);
  margin: 77px 0 31.57px 0;
  margin-left: 180px;
`;

export const KaKaoLogin = styled.img`
  width: 203.06px;
  height: 50px;
`;
