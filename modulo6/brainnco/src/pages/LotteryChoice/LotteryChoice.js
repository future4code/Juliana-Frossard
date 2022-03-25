import React from "react";
import SelectLottery from "../../components/SelectLottery/SelectLottery";
import {LotteryChoiceContainer, ContainerImg,LotteryName,LotteryDate,LotteryResultData} from './styled'
import LOGO from '../../assets/img/logo.svg'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import { formatDate } from "../../services/formatDate";

const LotteryChoice = (props) => {
    const lottery = props.lottery
    const resultId = props.resultId
    const lotteryResult = props.lotteryResult
    const date = formatDate(lotteryResult.data)
    
    return (
        <LotteryChoiceContainer>
            <SelectLottery lottery={lottery}/>
            <ContainerImg>
            <img src={LOGO}/>
            <LotteryName>{lottery.nome}</LotteryName>
            </ContainerImg>
            <div>
            <LotteryDate>Concurso</LotteryDate>
            <LotteryDate><b>{resultId.concursoId}-{date}</b></LotteryDate>
            </div>
            
            

        </LotteryChoiceContainer>
    );
}

export default LotteryChoice;
