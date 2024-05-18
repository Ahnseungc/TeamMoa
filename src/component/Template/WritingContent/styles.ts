import styled from "styled-components";

export const WritingContentLayout = styled.div`
    width: 375px;
    height: 812px;
    padding: 0 16px;
`;

export const Header = styled.div`
background-color: antiquewhite;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 12px 0 10px 0;
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
    height: 200px;
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