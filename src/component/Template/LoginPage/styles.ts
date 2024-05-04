import styled from "styled-components";

export const LoginPageLayout = styled.div`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainLogo = styled.img``;

export const LoginPageHeader = styled.header`
  height: 421px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginPageLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & input:not(:first-child) {
    margin-top: 10px;
  }
  & button:not(:last-child) {
    margin-top: 53px;
    margin-bottom: 10px;
  }
`;
