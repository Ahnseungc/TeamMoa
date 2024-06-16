import styled from "styled-components";

export const WritingUploadLayout = styled.div`
  width: 100vw;
  height: 812px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px 0 16px;
`;

export const HeaderTextLayout = styled.div`
  width: 100%;
  margin-right: 30px;
  text-align: center;
`;

export const ContentInputLayout = styled.div`
  width: 345px;
  margin: 0 auto;
  padding: 15px 5px 0 0;
`;

export const ContentInput = styled.input`
  border: none;
  width: 345px;
  height: 100px;
  padding: 5px 0 0 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  &::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ButtonLayout = styled.div`
  & button {
    position: fixed;
    bottom: 5rem;
    left: 2rem;
  }
`;

export const Line = styled.div`
  width: 375px;
  height: 1px;
  background-color: rgba(236, 236, 236, 1);
`;

export const Box = styled.div`
  width: 100vw;
  height: 137px;
  border-bottom: 1px solid rgba(236, 236, 236, 1);
  padding-top: 14px;
  padding-left: 24px;

  & > div {
    width: 100vw;
  }

  & .button {
    width: 82px;
    height: 22px;
    border-radius: 11px;
    padding: 0px, 13px, 0px, 13px;
    background-color: rgba(236, 236, 236, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;
