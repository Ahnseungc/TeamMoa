import styled from "styled-components";

export const WrittenPostFormLayout = styled.div`
  width: 375px;
  height: 164px;
  border-bottom: 0.75px solid rgba(189, 189, 189, 1);
  padding-top: 16px;

  & > div {
    padding: 0 15px;
  }
`;

export const PostInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 15px 15px 0;
`;

export const PostTitle = styled.div`
  width: 241px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 0 0;
`;

export const NeedPositionList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  background-color: #D9D9D9;
  padding: 3px;
`;
