import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import CadastroDoUsuario from './components/CadastroDoUsuario';
import ListaDosUsuarios from './components/ListaDosUsuarios';





export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroDoUsuario mudarParaCadastro={this.mudarParaCadastro}/>
      case "lista":
        return <ListaDosUsuarios mudarParaLista={this.mudarParaLista}/>
      default:
        return <div>Erro! Página não encontrada s/2</div>
    }
  }
  mudarParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  mudarParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>

    )
  }
}
