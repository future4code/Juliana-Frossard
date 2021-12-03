import axios from "axios";
import { useState, useEffect } from "react";



export default function MenuBar(props) {
    const [matchs, setMatchs] = useState([])

    useEffect(() => {
        getMatchs()
    }, [])

    const getMatchs = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:julianaFrossard/matches")
            .then((response) => {
                setMatchs(response.data.matches)
                console.log("MATCHS", response.data)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <div>
            {matchs.map((item) => {
                return (
                    <div>
                        <img width="50" src={item.photo} alt="imagem de perfil" />
                        <li>{item.name} </li>
                    </div>
                )
            })}
        </div>
    )
}