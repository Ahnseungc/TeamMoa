import styled from "styled-components";

export const EvaluationItemLayout = styled.div`
    margin: 21px 0 60px 16px;
`;

export const ScoreEvaluationLayout = styled.div`
    width: 330px;
    height: 1px;
    background-color: rgba(176, 176, 176, 1);
    margin: 0;
    margin-left: 7px;
    margin-top: 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;

    & div {
        margin: 0;
        /* position: relative; */
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    & div > span {
        position: absolute;
        width: 20px;
        margin: 25px 0 0 5px;
    }
`;

export const Line = styled.div`
    width: 1px;
    height: 22px;
    background-color: rgba(176, 176, 176, 1);
`;

export const ScorePoint = styled.div`
    position: absolute;
    bottom: -5px;
    /* top: -5px; */
    width: 11px;
    height: 11px;
    background-color: rgba(255, 208, 44, 1);
    border-radius: 10px;
    border: 1px solid rgba(217, 74, 86, 1);
`;