import styled from "styled-components";

export const HomeBoardFormLayout = styled.article`
  width: 100vw;
  height: 154px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  display: flex;
  justify-content: space-between;

  padding: 11px 20px 0 20px;
`;

export const HomeBoardFormContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeBoardFormContentHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 47px;
  & button {
    margin: 0;
  }
`;

export const HomeBoardHeaderTiteName = styled.div`
  height: 47px;
  margin-right: 67px;
  margin: 0;

  & div span:first-child {
    margin-right: 5px;
  }
`;

export const HomeBoardHeaderBody = styled.div`
  width: 335px;
  margin: 0;
  height: 50px;
`;

export const HomeBannerFooter = styled.footer`
  display: flex;

  margin: 0;

  width: max-content;
  & div:not(:last-child) {
    margin-right: 3px;
  }
`;
