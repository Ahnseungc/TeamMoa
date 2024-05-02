import styled from "styled-components";

export const WritingUploadLayout = styled.div`
    width: 375px;
    height: 812px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
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