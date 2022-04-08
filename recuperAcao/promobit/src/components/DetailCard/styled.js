import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const ContainerDetailCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
`
export const ContainerAvaliation = styled.div`
display: flex;
align-items: center;
`
export const ContainerMoviesCast = styled.div`
padding: 2%;
`
export const ContainerCastCard = styled(Card)`
width: 200px;
margin: 10px
`
export const CardCOntent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
`

