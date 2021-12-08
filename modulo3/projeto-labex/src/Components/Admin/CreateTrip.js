import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContainerCreateTrip = styled.div`
display: grid;
`

export default function CreateTrip() {

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
        </div>
    )
}