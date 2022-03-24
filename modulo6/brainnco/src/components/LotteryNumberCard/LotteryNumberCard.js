import React from 'react';
import { NumberCardContainer, BallContainer, Ball } from './styled'

const LotteryNumberCard = () => {

    return (
        <NumberCardContainer>
            <BallContainer>
                <Ball>1</Ball>
                <Ball>1</Ball>
                <Ball>1</Ball>
                <Ball>1</Ball>
                <Ball>1</Ball>
                <Ball>1</Ball>
            </BallContainer>
        </NumberCardContainer>
    );
};

export default LotteryNumberCard;