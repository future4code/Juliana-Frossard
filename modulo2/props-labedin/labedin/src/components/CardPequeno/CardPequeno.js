import React from "react";
import styled from 'styled-components';

const CardPequenoContainer=styled.div
`
    display: flex;
    justify-items: flex-start;
    align-items: center;
    border: 1px solid black;
    height: 100px;
    width: 550px;
    padding: 10px;
    margin-top: 10px;
`
const CardPequenoImg=styled.img
`
    width: 45px;
    margin-right: 10px;
`
const CardPequenoInformacao=styled.div
`
    display: flex;
    margin: 5px;
`
const CardPequenoh4=styled.h4
`
    margin: 5px; 
`
const CardPequenoP=styled.p
`
   margin: 5px;
`

function CardPequeno(props) {
    return(
        <CardPequenoContainer>
            <CardPequenoImg src={ props.img } />
            <CardPequenoInformacao>
                <CardPequenoh4>{props.armazenar}</CardPequenoh4>
                <CardPequenoP>{props.informacao}</CardPequenoP>
            </CardPequenoInformacao>
        </CardPequenoContainer>
    )
}

export default CardPequeno;
