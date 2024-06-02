import styled from "styled-components";

export const SearchFormLayout = styled.div`
    width: 375px;
    height: 812px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
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
        color: #B0B0B0;
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