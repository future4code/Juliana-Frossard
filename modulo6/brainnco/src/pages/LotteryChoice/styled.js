import styled from 'styled-components';
import {letterColor} from '../../constants/color'

export const LotteryChoiceContainer = styled.div`
height: 90vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 2rem 0 2rem 4rem;
flex-grow: 2;
background-color: #6BEFA3;
}
`
export const ContainerImg = styled.div`
display: flex;
align-items: center;
`
export const LotteryName = styled.p`
font-size: 1.875rem;
color: ${letterColor};
font-weight: 700;
text-transform: uppercase;
margin-left: 1rem;
`
export const LotteryDate = styled.p`
font-size: 1.25rem;
color: ${letterColor};
font-weight:300;
text-transform: uppercase;
margin-left: 1rem;
`
export const LotteryResultData = styled.p`
font-size: 1rem;
color: ${letterColor};
font-weight:900;
text-transform: uppercase;
margin-left: 1rem;
`