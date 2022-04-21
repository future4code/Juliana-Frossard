import styled from 'styled-components';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';

export const ContainerFilterCard = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
padding: 5%;
width: 100%;
`
export const ContainerButton = styled.div`
display: flex ;
flex-direction: row;
flex-wrap: wrap ;
justify-content: center;
`
export const ButtonStyled = styled(Button)`
border: 3px solid red;
padding:100px ;
`
export const ContainerInput = styled.div`
margin-bottom: 20px;
`
export const Input  = styled.input`
width: 100%;
height: 100% ;
`