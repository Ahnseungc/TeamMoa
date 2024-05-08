import styled from "styled-components";

export const ContactApplicantsLayout = styled.div`
    width: 375px;
    height: 812px;
`;

export const Header = styled.div`
    width: 375px;
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

export const ContentInputLayout = styled.div`
    padding: 10px 10px 20px 10px;
    
    & > div { 
        padding: 0 10px;
    }
`;

export const ContentLayout = styled.div`
    height: 63px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h3:not(:first-child) { 
        padding-left: 20px;
    }
`;