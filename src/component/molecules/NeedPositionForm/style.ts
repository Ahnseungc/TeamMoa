import styled from "styled-components";

export const NeedPositionLayout = styled.div`
  width: 335px;
  height: 22px;
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
  margin-bottom: 15px;
`;

export const FrameWorkLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-bottom: 30px;

  & > div:not(:last-child) {
    margin-right: 4px;
  }
`;
