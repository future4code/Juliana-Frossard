import React from 'react';
import styled from 'styled-components';
import  Axios  from 'axios';
import CadastroDoUsuario from './components/CadastroDoUsuario';
import ListaDosUsuarios from './components/ListaDosUsuarios';





export default class App extends React.Component{
  // state = {
  //   usersList = []
  //   // inputValue = 
  // }
  render() {
    return (
      <div>
      {/* <CadastroDoUsuario/> */}
      <ListaDosUsuarios/>
    </div>

    )
  }
}
