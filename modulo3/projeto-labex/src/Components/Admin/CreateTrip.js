import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate} from "react-router";

const Container = styled.div`
display: grid;
 justify-content: center;
 align-items: center;
 align-content: center;
`

export default function CreateTrip() {
    const navigate = useNavigate()

    const goToListTrip=()=>{
        navigate("/trips/list")
       };

    return (
        <Container>
            <h1>Criar Viagem</h1>
            <div>
                <input placeholder="Nome"/>
                <select>
                    <option>Escolha um Planeta</option>
                </select>
                <select>
                    <option>Escolha uma data</option>
                </select>
                <input placeholder="Descrição"/>
                <input type="Number"placeholder="Duração em dias"/>
            </div>
            <button onClick={goToListTrip}>Voltar</button>
            <button>Criar</button>
        </Container>
    )
}
