import styled from "styled-components";
import { CircleLoading } from "@atom/\bAnimations";

export const SpinnerLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerAtom = styled.img`
  animation: 1s linear 50ms infinite ${CircleLoading};
  width: 24px;
  height: 24px;
`;
