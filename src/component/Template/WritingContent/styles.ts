import styled from "styled-components";

export const WritingContentLayout = styled.div`
    width: 375px;
    height: 812px;
    padding: 0 16px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
`;

export const ContentInputLayout = styled.div`
    width: 345px;
    margin: 0 auto;
    padding-right: 5px;
    margin-top: 23px;
`;

export const ContentInput = styled.textarea`
    outline: none;
    border: none;
    width: 339px;
    height: 600px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    background-color: white;
    resize: none;
    &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #B0B0B0;
    }
`;