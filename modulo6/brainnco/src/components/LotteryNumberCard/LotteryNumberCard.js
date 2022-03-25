import React from 'react';
import { NumberCardContainer, BallContainer, Ball } from './styled'

const LotteryNumberCard = (props) => {
const lotteryResult = props.lotteryResult
    return (
        <NumberCardContainer>
            <BallContainer>
                <Ball>{lotteryResult.numeros[0]}</Ball>
                <Ball>{lotteryResult.numeros[1]}</Ball>
                <Ball>{lotteryResult.numeros[2]}</Ball>
                <Ball>{lotteryResult.numeros[3]}</Ball>
                <Ball>{lotteryResult.numeros[4]}</Ball>
                <Ball>{lotteryResult.numeros[5]}</Ball>
                
                
            </BallContainer>
        </NumberCardContainer>
    );
};

export default LotteryNumberCard;