import styled from "styled-components";

export const ConsentTextLayout = styled.div`
  width: 335px;
  padding: 30px 0 2px 7px;
`;

export const ConsentItemLayout = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 0 0 24px 0;

  & div:nth-child(3) {
    color: rgba(217, 74, 86, 1);
  }
`;

export const CheckBox = styled.div<{isChecked: boolean}>`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 3px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3.5px;
  color: ${(props) => (props.isChecked) ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.25)"};
  background-color: ${(props) => (props.isChecked) ? "rgba(217, 74, 86, 1)" : "rgba(255, 255, 255, 0.50)"};
  box-shadow: 0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03);
  margin-right: 10px;

`;