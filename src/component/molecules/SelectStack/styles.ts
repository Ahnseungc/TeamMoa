import styled from "styled-components";

export const SelectStackLayout = styled.div`
  width: 332px;
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #F2F4F6;
  border-radius: 10px;
  padding: 0 15px;
`;

export const PositionImage = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;
`;

export const StackListLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StackItem = styled.div`
  display: flex;
  flex-direction: row; 
  padding: 2px 20px;
  justify-content: center;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #D9D9D9;
  margin-right: 3px;
`;