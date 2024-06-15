import styled from "styled-components";

export const WritingBoardFormLayouts = styled.article`
  width: 100vw;
  height: 220px;
  padding: 0.875rem 0 1.25rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    position: fixed;
    bottom: 1.25rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const WritingHeader = styled.header`
  width: 335px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BarLine = styled.div`
  height: 1px;
  width: 329px;
  background-color: rgba(99, 99, 99, 1);
`;
