import styled from "styled-components";

export const LoginMainPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    background-image: url("/BackgroundImage.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export const LoginMainPageLayoutHeader = styled.div`
  margin-top: 6.188rem;
  margin-left: 1.438rem;

  @media screen and (min-width: 390px) {
    margin-top: 0;
    margin-left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const KaKaoLogin = styled.img`
  margin-top: 5.27rem;
  width: 280px;
  height: 40px;
  @media screen and (min-width: 390px) {
    /* margin-top: 1rem; */
    margin-bottom: 5rem;
  }
`;

export const TeamMoa = styled.img`
  width: 305.96px;
  height: 305.96px;
  margin-top: 3.063rem;
  margin-left: 5.3rem;
  @media screen and (min-width: 390px) {
    display: none;
  }
`;

export const TeamMoaDesktopLogo = styled.img`
  width: 250.96px;
  height: 250.96px;
  margin-top: 10vh;
  margin-right: 20vw;

  @media screen and (max-width: 390px) {
    display: none;
  }
`;
