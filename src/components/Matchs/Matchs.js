import axios from "axios";
import { useState, useEffect } from "react";



export default function MenuBar (props) {
    const [matchs, setMatchs] = useState()

    // useEffect(() => {
    //     getMatchs()        
    // })

    const getMatchs = () => {
        axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:julianaFrossard/matches")
        .then((response) => {
            setMatchs(response.data.matches)
            console.log("funciona", response.data)
        }).catch((err) => {
            console.log(err.response)
        })
    }
    // const AllMatchs = matchs.map((item) => {
    //     return (
    //         <li>{item.name} </li>
    //     )
    // })
    return (
        <div>
            
        </div>
    )
}