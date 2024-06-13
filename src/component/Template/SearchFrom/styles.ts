import styled from "styled-components";
import { MoveModal } from "@atom/Animations";

export const SearchFormLayout = styled.div`
  width: 375px;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  animation: ${MoveModal} 0.8s ease-in-out forwards;
`;

export const Header = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & button:last-child {
    margin-left: 15px;
  }
`;

export const InputLayout = styled.input`
  outline: none;
  border: none;
  width: 250px;
  font-size: 16px;
  font-weight: 400;
  background-color: white;
  resize: none;
  margin-left: 15px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #b0b0b0;
  }
`;

export const SearchResultLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  flex-grow: 1;
`;

export const SearchIcon = styled.img`
  width: 78px;
  height: 78px;
  margin-bottom: 16px;
  margin-top: 220px;
`;
