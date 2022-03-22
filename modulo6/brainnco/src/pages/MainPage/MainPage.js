import React from "react";
import { MainContainer, AlertMessage } from './styled'

const MainPage = () => {
    return (
        <MainContainer>
            <select>
                <option>Mega Sena</option>
                <option>Quina</option>
                <option>Lotofacil</option>
                <option>Lotomania</option>
                <option>Timemania</option>
                <option>Dia de Sorte</option>
            </select>
            <div>
                <AlertMessage>CONCURSO</AlertMessage>
                <AlertMessage>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</AlertMessage>
            </div>

        </MainContainer>
    );
}

export default MainPage;