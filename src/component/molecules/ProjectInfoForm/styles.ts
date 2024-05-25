import styled from "styled-components";

export const ProjectInfoFormLayout = styled.div`
  width: 375px;
  height: 139px;
  border-bottom: 0.75px solid rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: row;
`;

export const InfoLayout = styled.div`
  width: 85px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
  align-items: center;
  text-align: center;

  & > span {
    margin-top: 20px;
  }
`;