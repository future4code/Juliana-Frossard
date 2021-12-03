import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";


const MatchImg = styled.img`
  border-radius: 50%;
  
`

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
                        <MatchImg  width="50" src={item.photo} alt="imagem de perfil" />
                        <li><strong>{item.name}</strong></li>
                    </div>
                )
            })}

        </div>
    )
}