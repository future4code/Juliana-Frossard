import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const ContainerDetailCard = styled.div`
display: flex ;
justify-items: space-between;
padding: 20px 50px;

`
export const ContainerAvaliation = styled.div`
display: flex;
align-items: center;
`
export const InfoContainer = styled(CardContent)`
padding: 0px 200px;
height: 287px;
display: flex;
flex-flow: column;
align-items: left;
justify-content: center;
`
export const CardIMG = styled(CardMedia)`
height: 500px;
width: 400px;
border-radius: 8px;
`
export const Title = styled(Typography)`
padding: 1px;
line-height: 38px;
`
export const DetailInformation = styled(Typography)`
display: flex ;

`
