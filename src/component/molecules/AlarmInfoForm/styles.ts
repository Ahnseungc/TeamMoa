import styled from "styled-components";

export const AlarmInfoFormLayout = styled.section`
  width: 100%;
  height: 85px;
  display: flex;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  align-items: center;
`;

export const AlarmInfoContents = styled.div`
  & h3 {
    margin-bottom: 10px;
  }
`;

export const AlarmIcon = styled.img`
  width: 24px;
  height: 24px;
`;
