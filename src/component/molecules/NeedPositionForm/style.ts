import styled from "styled-components";

export const NeedPositionLayout = styled.div`
  width: 100vw;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 0;
`;

export const PositionTitleLayout = styled.div`
  display: flex;
  align-items: center;
  border-radius: 11px;
  background-color: rgba(236, 236, 236, 1);
  padding: 3px 13px;
  margin-left: 0;
  width: 108px;
  height: 22px;
`;

export const FrameWorkLayout = styled.div`
  width: 230px;
  margin-right: 0;
  /* margin-left: 10px; */

  & > span:not(:last-child) {
    margin-right: 10px;
  }
`;
