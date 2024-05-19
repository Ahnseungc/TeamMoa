import styled from "styled-components";

export const NeedPositionLayout = styled.div`
  width: 335px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PositionTitleLayout = styled.div`
  display: flex;
  align-items: center;
  border-radius: 11px;
  background-color: rgba(236, 236, 236, 1);
  padding: 3px 13px;
  left: 0;
`;

export const FrameWorkLayout = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;

  & > div:not(:last-child) {
    margin-right: 4px;
  }
`;
