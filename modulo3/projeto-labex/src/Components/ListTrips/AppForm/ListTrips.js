import React from 'react';
import { URL_BASE } from '../../../Constants/URL'
import { useRequestData } from '../../../Hooks/Hooks'
import { useNavigate } from "react-router";
import styled from 'styled-components';

const Container = styled.div`
display: grid;
 justify-content: center;
 align-items: center;
 align-content: center;
`
const P = styled.p`
font-size: 40px;
font-family:  "Arial";
color: white;
`
const Button = styled.button`
border-radius: 4px;
background-color: #73d3dd;
border: none;
margin: 10px;
width: 100px;
height: 30px;
color: #0a1e59;
font-family:  "Arial";
cursor: pointer;
&:hover {
    color: white;
    background-color: #72d1dc;
  }
`

export default function ListTrips() {
    const navigate = useNavigate()

    const trips = useRequestData(`${URL_BASE}/trips`)
    console.log(trips)

    const goToCreateTrip = () => {
        navigate("/trips/application")
    };
    const goToHome = () => {
        navigate("/")
    };

    return (
        <Container>
            <P>Lista de Viagens</P>
            <div>
                <Button onClick={goToHome}>Voltar</Button>
                <Button onClick={goToCreateTrip}>Inscrever-se</Button>
            </div>
        </Container>
    )
}