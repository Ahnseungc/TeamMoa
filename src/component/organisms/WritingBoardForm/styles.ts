import styled from "styled-components";

export const WritingBoardFormLayouts = styled.article`
  width: 390px;
  height: 412px;

  padding: 11px 15px 14px 15px;
  border-top: 0.75px solid rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WritingParagraph = styled.p`
  width: 249px;
  height: max-content;
  margin: 5px 6ox 0 6px;
`;

export const WritingHeader = styled.header`
  width: 100%;
  display: flex;
  height: 42px;
  align-items: center;
  justify-content: space-between;
  margin: 0 6px;
`;

export const WritingFooter = styled.footer`
  width: 100%;
  height: max-content;
  margin: 0 21px 0 0;
`;
