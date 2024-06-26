import styled from "styled-components";

export const ApplyInputFormLayout = styled.div<{ loading: boolean }>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 12px 0 15px 0;
  position: relative;
  overflow: ${(props) => (props.loading ? "hidden" : "")};
`;

export const HeaderTextLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 30px;
`;

export const Line = styled.div`
  width: 100vw;
  height: 0.75px;
  background-color: rgba(236, 236, 236, 1);
  position: absolute;
  left: 0;
`;

export const ContentInputLayout = styled.div`
  width: 100%;

  & div:last-child {
    height: 200px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
  }

  & div:last-child > textarea {
    height: 100%;
    border: none;
  }
`;
