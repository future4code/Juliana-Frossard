import react from "react";
import { Component } from "react";
import './App.css'
import MenuBar from "./components/MenuBar/MenuBar";
import CardPerfil from "./components/CardPerfil/CardPerfil";

export default class App extends Component{
  render () {
    return (
      <div className="ContainerAppFundo">
        <div className="ContainerApp">
        <MenuBar/>
        
        <button>Limpar</button>
      </div>
      
      </div>
      
    )
  }
}