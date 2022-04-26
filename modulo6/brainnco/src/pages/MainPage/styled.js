import styled from 'styled-components';
import {
    megaSenaColor, quinaColor,
    lotofacilColor, lotomaniaColor,
    timemaniaColor, diaDeSorteColor
} from "../../constants/color";

const getColor = color => {
    if(color === 0){
        return `background-color: ${megaSenaColor};`
    }if(color === 1){
        return `background-color: ${quinaColor};`
    }if(color === 2){
        return `background-color: ${lotofacilColor};`
    }if(color === 3){
        return `background-color: ${lotomaniaColor};`
    }if(color === 4){
        return `background-color: ${timemaniaColor};`
    }if(color === 5){
        return `background-color: ${diaDeSorteColor};`
    }
}

export const MainContainer = styled.div`
${({ color }) => getColor(color)};
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: 100px;
height: 100%;
font-family: 'Montserrat';

`
export const LotteryChoiceContainer = styled.div`
${({ color }) => getColor(color)};
height: 90vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 2rem 0 2rem 4rem;
flex-grow: 2;
`
export const ContainerImg = styled.div`
display: flex;
align-items: center;
`
export const LotteryName = styled.p`
font-size: 1.875rem;
color: white;
font-weight: 700;
text-transform: uppercase;
margin-left: 1rem;
`
export const LotteryDate = styled.p`
font-size: 1.25rem;
color: white;
font-weight:300;
text-transform: uppercase;
margin-left: 1rem;
`
export const SelectButton = styled.select`
background-color: #ffffff;
height: 2rem;
width: 10rem;
border-radius: 0.35rem;
margin:2rem;
padding-left:0.5rem;
text-transform: uppercase;
cursor: pointer;
`
export const LotteryResultContainer = styled.div`
width:810px;
height: 655px;
display: grid;
align-items: end;
background-color: #f1f1f1;
`
export const Alert = styled.p`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 3rem;
font-size: 1.1rem;
font-weight: 100;
`
export const NumberCardContainer = styled.div`
flex-grow: 3;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom: 5rem;
`
export const BallContainer = styled.div`
align-self: center;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
`
export const Ball = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #FFFFFF;
border-radius: 50%;
width: 5rem;
height: 5rem;
font-size: 1.7rem;
font-weight: bold;
margin: 0.5rem;
`
