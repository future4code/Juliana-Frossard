import axios from "axios";
import React, { useEffect, useState } from "react";
import LOGO from '../../assets/img/logo.svg'
import { BASE_URL } from "../../constants/BASE_URL";
import { getLotteries } from "../../services/getLotteries";
import { getLotteryResults } from "../../services/getLotteryResults";
import { getDateResult, getResultNumber } from "../../services/getResultNumber";
import {
    MainContainer, LotteryResultContainer, Alert,
    NumberCardContainer, BallContainer, Ball,
    LotteryChoiceContainer,
    ContainerImg, LotteryName, LotteryDate, SelectButton
} from "./styled";

const MainPage = () => {
    const [selected, set_selected] = useState({ id: 0, nome: 'Mega Sena' })
    const [selectLoto, set_selectLoto] = useState([])
    const [selectLotoTypes, set_selectLotoTypes] = useState([])
    const [lotoNumbers, set_lotoNumbers] = useState([])

    useEffect(() => {
        getLotteries(set_selectLoto)
        getLotteryResults(set_selectLotoTypes)
    }, [selected])

    useEffect(() => {
        selectLotoTypes.filter((item) => {
            if (item.loteriaId === selected.id) {
                getResultNumber(set_lotoNumbers, item.concursoId)
            }
        })
    }, [selectLotoTypes])

    const renderSelected = selectLoto && selectLoto.map((item) => {
        return (
            <option key={item.id} value={item.id} name={item.name}>
                {item.nome.toUpperCase()}</option>
        )
    })
    
    const renderedNumbers = lotoNumbers.map((number) => {
        return (
            <Ball key={number}>{number}</Ball>
        )    })
    
    const onChangeSelect = (event) => {
        selectLoto.filter((item) => {
            if (event.target.value === item.id.toString()) {
                set_selected({ id: item.id, nome: item.nome.toUpperCase() })
            }
        })
    }
       return (
        <MainContainer color={selected.id}>
            <LotteryChoiceContainer color={selected.id}>
                <SelectButton value onChange={onChangeSelect}>
                    {renderSelected}
                </SelectButton>
                <ContainerImg>
                    <img src={LOGO} />
                    <LotteryName>{selected.nome}</LotteryName>
                </ContainerImg>
                <div>
                    <LotteryDate><b>Concurso - 430</b></LotteryDate>
                    
                </div>
            </LotteryChoiceContainer>
            <LotteryResultContainer>
                <NumberCardContainer>
                    <BallContainer>
                        {renderedNumbers}
                    </BallContainer>
                </NumberCardContainer>
                <Alert>Este concurso é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Alert>
            </LotteryResultContainer>
        </MainContainer>
    );
}

export default MainPage;
