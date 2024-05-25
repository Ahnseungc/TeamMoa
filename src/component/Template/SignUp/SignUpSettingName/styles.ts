import styled from "styled-components";
import { MoveHeading, MoveTexting, MoveInputing } from "@atom/\bAnimations";

export const SignUpSchoolSettingNameLayout = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  position: relative;
  & > button:first-child {
    margin: 17px 0 0 0;
  }

  & > button:last-child {
    position: absolute;
    top: 732px;
    left: 24px;
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

  & label {
    margin: 0;
  }
`;
export const SignUpSchoolSettingLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  justify-content: space-between;
  position: relative;
  width: 339px;

  & input {
    opacity: 0;
    outline: none;
    animation: ${MoveInputing} 0.8s 0.8s ease-in-out forwards;
  }
`;
