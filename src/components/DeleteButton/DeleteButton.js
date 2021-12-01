import axios from "axios";
import { useState, useEffect } from "react";
import './DeleteButton.css'


export default function DeleteButton(props) {
    const [deletar, setDeletar] = useState()

    useEffect(() => {
        putClear()
    });

    const putClear = () => {
        const body = {
         id: "71gMbZs2txS9LDvGK5Ew",
         choice: true
        }
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:julianaFrossard/clear", body)
            .then((response) => {
                console.log("funcionou", response.data)
            }).catch((err) => {
                console.log(err.response)
            })
    }
    return (
        <div className="containerButton">
            <button className="button" onClick={putClear}>Apagar matchs</button>
        </div>
    )
}