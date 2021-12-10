import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { countries } from '../../../Constants/Coutries';
import { URL_BASE } from '../../../Constants/URL';
import { Container, Form, P, Button, ButtonFlex } from './Css';


export default function AplicationForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [applicationText, setAplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeAge = (event) => {
        setAge(event.target.value)
    }
    const changeApplicationText = (event) => {
        setAplicationText(event.target.value)
    }
    const changeProfession = (event) => {
        setProfession(event.target.value)
    }
    const changeCountry = (event) => {
        setCountry(event.target.value)
    }


    // const applyToTrip = () => {
    //     const body = {
    //         name: name,
    //         age: age,
    //         applicationText: applicationText,
    //         profession: profession,
    //         country: country,
    //     }
    //     axios.post(`${URL_BASE}/trips/id/apply`, body, {
    //         headers: {
    //             ContentType= "application/json"
    //         }
    //     }).then((response) => {
    //         console.log("APLICADO", response.data)
    //         setName("")
    //         setAge(0)
    //         setAplicationText("")
    //         setProfession("")

    //     }).catch((err) => {
    //         console.log("Erro! Inscrição não concluida, tente novamente.")
    //     })
    // }


    return (
        <Container>
            <P>Inscreva-se para uma viagem</P>
            <Form >
                <select>
                    <option>Escolha uma viagem</option>
                </select>
                <input
                    placeholder="Nome"
                    value="name"
                    onChange={changeName}
                    required />
                <input
                    placeholder="Idade"
                    value="age"
                    onChange={changeAge}
                    min={18}
                    required />
                <input
                    placeholder="Texto de Candidatura"
                    value="applicationText"
                    onChange={changeApplicationText}
                    pattern={"^.{10,}$"}
                    title={"O texto deve ter no mínimo 10 caracteres."}
                    required />
                <input
                    placeholder="Profissão"
                    value="profession"
                    onChange={changeProfession}
                    required />
                <select
                    name={"country"}
                    value={country}
                    onChange={changeCountry}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <Button>Enviar</Button>

            </Form>



        </Container>
    )
}