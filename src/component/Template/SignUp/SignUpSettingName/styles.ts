import styled from "styled-components";
import { MoveHeading, MoveTexting, MoveInputing } from "@atom/\bAnimations";

export const SignUpSchoolSettingNameLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  & > button:first-child {
    margin: 17px 0 0 0;
  }
`;

export const SignUpSchoolSettingText = styled.p`
  margin: 46px 18px 0 0;
  padding-left: 2px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h3:first-child {
    opacity: 0;
    animation: ${MoveHeading} 0.8s ease-in-out forwards;
  }

  & h3:last-child {
    opacity: 0;
    animation: ${MoveTexting} 0.6s 0.5s ease-in-out forwards;
  }
`;

export const SignUpSchoolSettingLabelForm = styled.form`
  margin: 100px 18px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 2px;

  & button {
    margin-top: 367px;
  }
  & label {
    margin: 0;
  }
`;
export const SignUpSchoolSettingLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  justify-content: space-between;

  & input {
    opacity: 0;
    animation: ${MoveInputing} 0.8s 0.8s ease-in-out forwards;
    outline: none;
  }
`;
