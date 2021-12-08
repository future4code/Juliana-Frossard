import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContainerAplication = styled.div`
display: grid;
`

export default function AplicationForm() {

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <ContainerAplication>
                <select>
                    <option>Escolha uma viagem</option>
                </select>
                <input placeholder="Nome"/>
                <input placeholder="Idade"/>
                <input placeholder="Texto de Candidatura"/>
                <input placeholder="Profissão"/>
                <select>
                    <option>Escolha um País</option>
                </select>
             </ContainerAplication>
             <button>Voltar</button>
             <button>Enviar</button>
        </div>
    )
}