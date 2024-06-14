import { keyframes } from "styled-components";

export const MoveHeading = keyframes`  
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const MoveModal = keyframes`  
  0% {
    opacity: 0;    
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const MoveTexting = keyframes`  
  0% {
    opacity: 0;
    transform: translateY(8px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const MoveInputing = keyframes`  
  0% {
    opacity: 0;
    color: #DBDBDB;
    width: 0;
  }

  100% {
    opacity: 1;
    color: #0f0f0f;
    width: 339px;
  }
`;
