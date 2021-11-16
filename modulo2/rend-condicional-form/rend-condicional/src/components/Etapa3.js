import React from 'react'

export default class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <ol>
                    <li>Por que você não terminou um curso de graduação?</li>
                    <input />
                    <li>Você fez algum curso complementar?</li>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de Inglês</option>
                    </select>
                </ol>

            </div>
        )
    }
}

