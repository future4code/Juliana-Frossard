import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';


export default function SelecMatchs(props) {
    const [next, setNext] = useState(0)
    const [acept, setAcept] = useState(true)


    const newProfile = () => {
        setNext(next + 1)
    }
    const matchProfile = (acept) => {
        setAcept(acept)
        postChoosePerson()
        newProfile()
    }

    useEffect(() => {
        postChoosePerson();

    }, []);

    const postChoosePerson = () => {
        const body = {
            id: props.profile.id,
            choise: acept
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julianaFrossard/choose-person", body)
            .then((response) => {
                console.log(response.data.isMatch)
                if (response.data.isMatch) {
                    window.alert("Você tem um match!")
                }
            }).catch((err) => {
                console.log(err.response)
            });
    };


    return (

        <div className="ContainerMatchButton">
            <button >N</button>
            <button>Y</button>

        </div>
    )
};
