import React from "react";
import SelectLottery from "../../components/SelectLottery/SelectLottery";
import {LotteryChoiceContainer, ContainerImg,LotteryName,LotteryDate} from './styled'
import LOGO from '../../assets/img/logo.svg'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";

const LotteryChoice = () => {
    const getLottery = useRequestData([],`${BASE_URL}/loterias`)

    const lotterySelect = getLottery.map((item) => {
        return <SelectLottery 
        key={item.id}
        name={item.nome}/>         
    })
    

    return (
        <LotteryChoiceContainer>
            {lotterySelect}
            <ContainerImg>
            <img src={LOGO}/>
            <LotteryName>MEGA-SENA</LotteryName>
            </ContainerImg>
            <div>
            <LotteryDate>Concurso</LotteryDate>
            <LotteryDate><b>DIA DO CONCURSO</b></LotteryDate>
            </div>
            
            

        </LotteryChoiceContainer>
    );
}

export default LotteryChoice;
