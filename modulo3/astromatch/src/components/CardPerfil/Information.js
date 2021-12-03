import axios from "axios";
import { useState, useEffect } from "react";
import './Information.css'
import styled from 'styled-components';
import Animation from '../Animation/Animation'




export default function Information() {
    const [profile, setProfile] = useState({
        profile: {
            id: "",
            age: 0,
            name: "",
            photo: "",
            bio: ""
        }
    })
    const [carregando, setCarregando] = useState("")


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
                setCarregando("Ops, houve um erro! Tente novamente. 😅")
            })

    }

    return (
        <div>
            {
                carregando === "carregando" ?
                    <Animation/>
                    :
                    <div className="ContainerInform">

                        <img className="imgProfile" src={profile.photo} alt="imagem de perfil" />
                        <div className="informationProfile"><strong>{profile.name}</strong>, {profile.age}
                            <p>{profile.bio}</p>
                        </div>
                    </div>

            }

        </div>
    )

}


