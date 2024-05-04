import styled from "styled-components";

export const SignUpSuccessLayout = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
`;

export const SignUpSuccessLayoutText = styled.p`
  margin: 46px 18px 0 0;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SighUpSchoolSettingHeader = styled.header`
  display: flex;
  align-items: center;

  & span {
    margin-left: 112px;
  }
`;

export const SignUpSucessImg = styled.img`
  width: 265px;
  height: 265px;
  background-color: aliceblue;
`;

export const SignUpSuccessBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 61px;

  & span {
    margin-top: 33px;
  }

  & button {
    margin-top: 157px;
  }
`;
