import axios from "axios";
import { useState, useEffect } from "react";
import Information from './Information'
import SelectMatchs from '../Matchs/SelectMatch'
import styled from "styled-components";

const ContainerCard=styled.div`
position: center;
     border-radius: 10px;
     height: 460px;
     width: 350px;
     margin-left: 25px;
     
 `


export default function CardPerfil (props) {
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

    },[] );


    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julianaFrossard/person")
            .then((response) => {
                setProfile(response.data.profile)
                console.log(response.data.profile)
            }).catch((err) => {
                console.log(err.response)
            })

    }

    return (
        <ContainerCard>
            <Information getProfileToChoose={getProfileToChoose()}  profile={profile}/>
            {/* <SelectMatchs profile={profile}/> */}
        </ContainerCard>
    )
}