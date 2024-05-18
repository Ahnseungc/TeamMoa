import { MoveHeading, MoveInputing, MoveTexting } from "@atom/\bAnimations";
import styled from "styled-components";

export const SignUpSettingSchoolNameLayout = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  padding-left: 18px;
  position: relative;

  & > button:first-child {
    margin: 17px 16px 0 0;
  }

  & > button:last-child {
    /* padding: 0;
    margin: 0;
    margin-top: 12px; */
    position: absolute;
    top: 732px;
    left: 24px;
  }
  & > span {
    position: absolute;
    right: 119px;
    top: 704px;
  }
`;

export const SignUpSettingSchoolNameText = styled.p`
  margin: 46px 18px 0 0;
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

export const SignUpSettingSchoolNameLabelForm = styled.form`
  margin: 100px 18px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /* & span {
    margin-top: 367px;
  } */
  /* & button {
    margin-top: 12px;
  } */

  & input {
    opacity: 0;
    animation: ${MoveInputing} 0.8s 0.8s ease-in-out forwards;
    outline: none;
  }
`;
export const SignUpSettingSchoolNameLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  justify-content: space-between;
  & label {
    margin: 0;
  }
`;

export const SighUpSchoolSettingHeader = styled.header`
  display: flex;
  align-items: center;

  & span {
    margin-left: 112px;
  }
`;
