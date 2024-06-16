import styled from "styled-components";

export const PostingHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 3rem;
`;

export const PostingLayout = styled.div`
  width: 100vw;
  overflow: hidden;
  & button {
    position: fixed;
    bottom: 1.5rem;
    left: 2rem;
  }
`;
