import styled from "styled-components";

export const ContentInputLayout = styled.div<{contentTitle: string}>`
  width: 335px;
  height: 120px;
  padding: 20px 0 0 0;
`;

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  align-items: center;
  justify-content: space-between;
  left: 0;
  
  & button {
    margin-right: 0;
  }
`;

export const ContentLayout = styled.textarea`
  width: 335px;
  height: 25px;
  padding: 0 10px 10px 10px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  font-family: Pretendard;
  outline: none;
  resize: none;
  border-bottom: 1px solid rgba(217, 217, 217, 1);

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: rgba(176, 176, 176, 1);
  }
`;