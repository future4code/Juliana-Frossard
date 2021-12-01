import axios from "axios";
import { useState, useEffect } from "react";
import './MenuBar.css';
import Matchs from '../Matchs/Matchs';
import CardPerfil from "../CardPerfil/CardPerfil";


export default function MenuBar () {
    const [telaAtual, setTelaAtual] = useState("home")

    const escolheTela = () => {
        switch (telaAtual){
            case "home":
                return <CardPerfil/>
            case "matchs":
            return <Matchs />  
            default:
                return "Erro! Página não encontrada :("  
        }
    }

    const irParaHome = () => {
        setTelaAtual("home")
    }
    const irParaMatchs = () => {
        setTelaAtual("matchs")
    }
    return (
        <div>
            <button onClick={irParaHome}> Home</button>
            <button onClick={irParaMatchs}>Matchs</button>
            <p className="TitleApp">AstroMatch 💞</p>
            {escolheTela()}
            
        </div>
    )
}