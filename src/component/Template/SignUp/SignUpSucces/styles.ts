import styled from "styled-components";

export const SignUpSuccessLayout = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  position: relative;

  & div:last-child {
    margin-top: 157px;
  }

  & header {
    margin-left: 18px;
  }
`;

export const SignUpSuccessLayoutText = styled.p`
  margin: 46px 18px 0 0;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignUpSuccessTextHeader = styled.div`
  margin: 0;
  padding: 0;
  padding-left: 18px;
`;

export const SignUpSucessImg = styled.img`
  width: 235px;
  height: 265px;
`;

export const SignUpSuccessBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 61px;

  & span {
    margin-top: 47px;
  }
`;
