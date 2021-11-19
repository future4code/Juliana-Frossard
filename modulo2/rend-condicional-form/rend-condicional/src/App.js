import React from 'react'
import './App.css';
import './components/Etapa1'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

export default class App extends React.Component {
  state = {
    etapa1:false
  }
  logar = () => {
    this.setState({
      login: true
    })
  }


  render() {
    let pagina;
    if (this.state.etapa1) {
      pagina = <Etapa2 />
    } else {
      pagina = <Etapa1 onClickLogin = {this.logar}/>
    }
    return (
      <div>
        {pagina}
        

      </div>
    );
  }
}

