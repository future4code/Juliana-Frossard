import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate} from "react-router";

const ContainerCreateTrip = styled.div`
display: grid;
`

export default function CreateTrip() {
    const navigate = useNavigate()

    const goToListTrip=()=>{
        navigate("/trips/list")
       };

    return (
        <div>
            <h1>Criar Viagem</h1>
            <ContainerCreateTrip>
                <input placeholder="Nome"/>
                <select>
                    <option>Escolha um Planeta</option>
                </select>
                <select>
                    <option>Escolha uma data</option>
                </select>
                <input placeholder="Descrição"/>
                <input type="Number"placeholder="Duração em dias"/>
            </ContainerCreateTrip>
            <button onClick={goToListTrip}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}