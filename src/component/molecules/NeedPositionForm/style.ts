import styled from "styled-components";

export const NeedPositionLayout = styled.div`
  width: 353px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FrameWorkLayout = styled.div`
  width: 248px;
  height: 100%;
  display: flex;
  align-items: center;

  & > div:not(:last-child) {
    margin-right: 4px;
  }
`;
