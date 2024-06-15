import styled from "styled-components";

export const SelectStackLayout = styled.div`
  width: 100vw;
  height: 22px;
  display: flex;
  margin-top: 10px;
`;

export const PositionSelectLayout = styled.div<{ isSelect: boolean }>`
  width: 20px;
  height: 20px;
  padding: 2px;
  display: flex;
  margin-left: 0;
  margin-right: 0;
  align-items: last baseline;
  border-radius: 10px;
  /* margin-right: 10px; */
  border: ${(props) =>
    props.isSelect
      ? "3px solid rgba(217, 74, 86, 1)"
      : "3px solid rgba(102, 112, 128, 0.3)"};

  & div {
    width: ${(props) => (props.isSelect ? "10px" : "0")};
    height: ${(props) => (props.isSelect ? "10px" : "0")};
    background-color: ${(props) =>
      props.isSelect ? "rgba(217, 74, 86, 1)" : "none"};
    border-radius: ${(props) => (props.isSelect ? "10px" : "0")};
  }
`;
