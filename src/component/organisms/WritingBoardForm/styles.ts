import styled from "styled-components";

export const WritingBoardFormLayouts = styled.article`
  width: 335px;
  height: 522px;
  padding: 28px 0 14px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WritingParagraph = styled.p`
  width: 335px;
  height: max-content;
  margin: 5px 6ox 0 6px;
`;

export const WritingHeader = styled.header`
  width: 335px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  & button {
    margin-left: 250px;
  }
`;

export const WritingFooter = styled.footer`
  width: 100%;
  height: max-content;
  margin: 27px 0 0 0;
`;
