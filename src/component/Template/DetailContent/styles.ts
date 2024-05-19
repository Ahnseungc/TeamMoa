import styled from "styled-components";

export const DetailContentLayout = styled.div`
    width: 375px;
    height: 812px;
    padding: 0 16px;
    overflow: scroll;
    & div:nth-child(3) {
        margin-top: 36px;
    }

    & div:nth-child(4) {
        margin: 36px 0 186px 0;
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
`;

export const ButtonLayout = styled.div`
    position: fixed;
    margin-left: 6px;
    /* padding-bottom: 30px; */
    bottom: 30px;
`;