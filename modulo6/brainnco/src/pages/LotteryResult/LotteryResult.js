import React from "react";
import LotteryNumberCard from "../../components/LotteryNumberCard/LotteryNumberCard";
import {LotteryResultContainer,Alert} from './styled'

const LotteryResult = () => {
    return (
        <LotteryResultContainer>
            <LotteryNumberCard/>
            <Alert>Este concurso é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Alert>
        </LotteryResultContainer>
    );
}

export default LotteryResult;