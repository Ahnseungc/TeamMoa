import styled from "styled-components";

export const SignUpSchoolSettingNameLayout = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;

  & > button:first-child {
    margin: 17px 16px 0 0;
  }
`;

export const SignUpSchoolSettingText = styled.p`
  margin: 46px 18px 0 0;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignUpSchoolSettingLabelForm = styled.form`
  margin: 100px 18px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & button {
    margin-top: 367px;
  }
`;
export const SignUpSchoolSettingLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  justify-content: space-between;
`;
