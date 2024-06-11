import styled from "styled-components";

export const EvaluationFormLayout = styled.div`
    padding-top: 18px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & h3 {
        margin-bottom: 17px;
        padding-left: 20px;
    }

    & section {
        width: 100%;
        height: 0.75px;
        background-color: rgba(236, 236, 236, 1);
    }

    & button {
        margin-top: 184px;
    }
`;

export const UserInfoLayout = styled.div`
    margin-top: 23px;
    margin-bottom: 28px;
    padding: 0 20px;

    & > div {
        padding-top: 18px;
    }

    & > div > div:last-child {
        margin-left: 10px;
    }
`;