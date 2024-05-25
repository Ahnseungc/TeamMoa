import styled from "styled-components";

export const HomeBoardFormLayout = styled.article`
  width: 375px;
  height: 154px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  display: flex;
  justify-content: space-between;
`;

export const HomeBoardFormContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeBoardFormContentHeader = styled.header`
  display: flex;
  width: 375px;
  padding: 10px 0 0 20px;
  height: 47px;
`;

export const HomeBoardHeaderTiteName = styled.div`
  height: 47px;
  margin-right: 67px;
`;

export const HomeBoardHeaderBody = styled.div`
  width: 335px;
  padding: 10px 0 0 10px;
  height: 50px;
`;

export const HomeBannerFooter = styled.footer`
  display: flex;
  padding: 17px 20px 17px 0;

  width: max-content;
  & div:not(:last-child) {
    margin-right: 3px;
  }
`;
