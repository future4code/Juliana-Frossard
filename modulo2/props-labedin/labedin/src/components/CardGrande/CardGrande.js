import React from 'react';
import styled from 'styled-components';

const CardGrandeContainer=styled.div
`
   display: flex;
   align-items: center;
   border: 1px solid black;
   padding: 20px 10px;
   margin-bottom: 10px;
   height: 200px;
`
const CardGrandeImagem=styled.img
`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const CardGrandeh4=styled.h4
`
    margin-bottom: 15px;
`
const CardGrandeInformacao=styled.div
`
   display: flex;
   flex-direction: column;
   justify-items: flex-start;
`
function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <CardGrandeImagem src={ props.imagem } />
            <CardGrandeInformacao>
                <CardGrandeh4>{ props.nome }</CardGrandeh4>
                <p>{ props.descricao }</p>
            </CardGrandeInformacao>
        </CardGrandeContainer>
    )
}

export default CardGrande;