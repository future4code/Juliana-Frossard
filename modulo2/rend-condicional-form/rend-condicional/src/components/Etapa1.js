import React from 'react'




export default class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA1 - DADOS GERAIS</h1>
                <ol>
                    <li>Qual é o seu nome?</li>
                    <input />
                    <li>Qual é a sua idade?</li>
                    <input />
                    <li>Qual é o seu e-mail?</li>
                    <input />
                    <li>Qual é a sua escolaridade?</li>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
                </ol>
                <button onClick = {this.props.onClickLogin}>Próxima etapa</button>


            </div>
        )
    }
}
