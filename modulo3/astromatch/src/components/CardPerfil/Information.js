import axios from "axios";
import { useState, useEffect } from "react";
import './Information.css'
import Loading from '../Animation/Animation'




export default function Information() {
    const [carregando, setCarregando] = useState("")
    const [profile, setProfile] = useState({
        profile: {
            id: "",
            age: 0,
            name: "",
            photo: "",
            bio: ""
        }
    })


    useEffect(() => {
        getProfileToChoose();

    }, []);


    const getProfileToChoose = () => {
        setCarregando("carregando")
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julianaFrossard/person")
            .then((response) => {
                setProfile(response.data.profile)
                setCarregando("carregou")
            }).catch((err) => {
                console.log(err.response)
                setCarregando("Ops, ocorreu um erro. Tente novamente")
            })

    }

    return (
        <div className="ContainerInformation">
            {
                carregando === "carregando"  ?
                <Loading/>  :
                <div>
                <img className="imgProfile" width="240" src={profile.photo} alt="imagem de perfil" />
            <div className="informationProfile">{profile.name}, {profile.age}
                <p>{profile.bio}</p>
            </div>
            </div>

            }
            
            
        </div>


    )
}
