import React from "react";
import LotteryChooice from "../LotteryChoice/LotteryChoice";
import LotteryResult from "../LotteryResult/LotteryResult";
import { MainContainer } from "./styled";


const MainPage = () => {
    const getLottery = {
        "id": 1,
        "nome": "Mega Sena"
    }
    const getResultId = {
        "loteriaId": 1,
        "concursoId": "440"
    }
    const getResultNumber = {
        "id": "430",
        "loteria": 1,
        "numeros": [
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            
        ],
        "data": "2021-04-20T00:28:09.426Z"
    }
    return (
        <MainContainer>
            <LotteryChooice
                lottery={getLottery}
                resultId={getResultId}
                lotteryResult={getResultNumber}
            />
            <LotteryResult
                lotteryResult={getResultNumber}
            />
        </MainContainer>
    );
}

export default MainPage;
