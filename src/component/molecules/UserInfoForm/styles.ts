import styled from "styled-components";

export const UserInfoFormLayout = styled.div`
  width: 375px;
  height: 145px;
  border-bottom: 0.75px solid rgba(189, 189, 189, 1);
  padding-top: 20px;

  & > div {
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const UserInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  & > span {
    margin-bottom: 15px;
  }
`;