import { MoveModal } from "@atom/\bAnimations";
import styled from "styled-components";

export const WritingContentLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 16px;
  animation: ${MoveModal} 0.8s ease-in-out forwards;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;

  & button:first-child {
    margin-right: 110px;
  }

  & button:last-child {
    margin-left: 100px;
  }
`;

export const ContentInputLayout = styled.div`
  width: 345px;
  margin: 0 auto;
  padding-right: 5px;
  margin-top: 23px;
`;

export const ContentInput = styled.textarea`
  outline: none;
  border: none;
  width: 339px;
  height: 600px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  background-color: white;
  resize: none;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #b0b0b0;
  }
`;
