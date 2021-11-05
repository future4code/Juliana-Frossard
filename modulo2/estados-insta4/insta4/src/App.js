import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    usuarios: [
      {
      nomeUsuario: "João",
      fotoUsuario:"teste",
      fotoPost:"teste2",
    }
  ]
  };

  render() {
    const listaDeUsuario = this.state.usuarios.map((usuario) => {
      return(
        <div>
          {usuario.nomeUsuario}
          {usuario.fotoUsuario}
          {usuario.fotoPost}
        </div>
      )
    })

    
    return (
      <MainContainer>
        <Post>
          <div>{listaDeUsuario}</div>
        </Post>
      
       
      </MainContainer>
    );
  }
}


export default App;
