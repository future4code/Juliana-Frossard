//DUVIDAS DO PLANTÃO!

import axios from "axios"
import { useState } from "react"

const [perfil, setPerfil] = useState()

const enviarLike = () => {
    const body={
        id:"" ,
        choice: ""
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julianaFrossard/choose-person",)
}