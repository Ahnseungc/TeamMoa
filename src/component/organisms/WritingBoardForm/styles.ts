import styled from "styled-components";

export const WritingBoardFormLayouts = styled.article`
  width: 100vw;
  height: 522px;
  padding: 28px 0 14px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const WritingParagraph = styled.p`
  width: 100vw;
  height: max-content;
  margin: 5px 6ox 0 6px;
  padding-left: 1.5rem;
`;

export const WritingHeader = styled.header`
  width: 100vw;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: row;

  & button {
    position: fixed;
    left: 20rem;
    top: 5rem;
  }
`;

export const WritingFooter = styled.footer`
  width: 100%;
  height: max-content;
  display: flex;

  align-items: start;
  flex-direction: column;
  margin: 27px 0 0 0;

  & span {
    margin-left: 1.5rem;
  }
  & span:first-child {
    margin-bottom: 5px;
  }
`;
