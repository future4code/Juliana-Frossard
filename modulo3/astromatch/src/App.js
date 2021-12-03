import react from "react";
import { Component } from "react";
import './App.css'
import MenuBar from "./components/MenuBar/MenuBar";
import DeleteButton from "./components/DeleteButton/DeleteButton";

export default class App extends Component{
  render () {
    return (
      <div className="ContainerAppFundo">
        <div className="ContainerApp">
        {/* <MenuBar/>
        
        <DeleteButton/> */}
      </div>
      
      </div>
      
    )
  }
}