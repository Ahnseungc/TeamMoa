import styled from "styled-components";

export const DefaultLayout = styled.div`
  width: 100vw;
  height: 100%;

  & > button {
    position: fixed;
    right: calc((100vw - 300px) / 2);
    bottom: 125px;
  }
`;
