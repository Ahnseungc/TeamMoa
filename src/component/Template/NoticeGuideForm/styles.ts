import styled from "styled-components";

export const WritingContentLayout = styled.div`
    width: 375px;
    height: 812px;
`;

export const Header = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
`;

export const HeaderTextLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 30px;
`;

export const NoticeLayout = styled.div`
    width: 345px;
    margin: 0 auto;
    padding: 15px 5px 0 0;
`;

export const NoticeTextLayout = styled.div`
    width: 345px;
    height: 550px;
    padding: 20px 0 0 12px;
`;

export const ContentText = styled.text`
    font-size: 30px;
    font-weight: bold;
`;