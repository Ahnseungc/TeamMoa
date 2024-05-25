import styled from "styled-components";

export const UserInfoFormLayout = styled.div`
  width: 100%;
  height: 137px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  display: flex;

  align-items: center;

  & img {
    margin: 0;
    margin-left: 24px;
  }

  /* & > div {
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  } */
`;

export const UserInfoLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: 33px;

  & div:not(:last-child) {
    margin-bottom: 14.28px;
  }

  & div {
    height: 19px;
    margin: 0;
  }

  & div > span:first-of-type {
    display: inline-block;
    width: 68px;
    margin-right: 10px;
  }
`;
