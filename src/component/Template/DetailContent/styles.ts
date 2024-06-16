import styled from "styled-components";

export const DetailContentLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 0;
  overflow-y: scroll;
  overflow-x: hidden;
  & div:nth-child(3) {
    margin-top: 36px;
  }

  & div:nth-child(4) {
    margin: 36px 0 38px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
`;

export const HeaderTextLayout = styled.div`
  width: 100%;
  margin-right: 30px;
  text-align: center;
`;

export const InfoInputLayout = styled.div`
  padding: 27px 0 5px 0;
  width: 100%;
`;

export const ButtonLayout = styled.div`
  padding-left: 2rem;
  & button {
    bottom: 30px;
    position: fixed;
  }
`;

export const WritingHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 18px;
  margin-left: 21px;
  padding: 12px 0 15px 0;
`;
export const TagLayout = styled.div`
  display: flex;
  margin: 10px 0 0 22px;
  & button {
    margin: 0;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background-color: rgba(236, 236, 236, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selected {
    border: 1px solid rgba(217, 74, 86, 1);
    background-color: rgba(236, 163, 169, 1);
    & span {
      color: rgba(217, 74, 86, 1);
    }
  }

  & button:hover {
    border: 1px solid rgba(217, 74, 86, 1);
    background-color: rgba(236, 163, 169, 1);
    & span {
      color: rgba(217, 74, 86, 1);
    }
  }
  & button:first-child {
    margin-right: 10px;
  }
`;
