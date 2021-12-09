import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import {URL_BASE} from '../../URL'


export default function Login() {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [inputValueEmail, setInputValueEmail] = useState("")
    const [inputValuePassword, setInputValuePassword] = useState("")

    const goToAdmPage = () => {
        navigate('/admin/trips/list')
    }

    

    const postSingUp = () => {
        const body = {
            email: inputValueEmail,
            password: inputValuePassword
        }

        axios.post(`${URL_BASE}/login`, body, {
            headers: {
                ContentType: "application/json"
            }
        }).then((response) => {
            console.log("login ok", response.data)
            setInputValueEmail("")
            setInputValuePassword("")
        }).catch((err) => {
            console.log(err.response)
            setInputValueEmail("")
            setInputValuePassword("")
            window.alert("Dados incorretos, tente novamente.")
        })

    }

    const handleInputChangeEmail = (event) => {
        setInputValueEmail(event.target.value)
    }
    const handleInputChangePassword = (event) => {
        setInputValuePassword(event.target.value)
    }
    


    return (
        <div>
            <h2>Login</h2>
            <div>
                <input
                    placeholder="E-mail"
                    value={inputValueEmail}
                    onChange={handleInputChangeEmail} />
                <input
                    placeholder="Senha"
                    value={inputValuePassword}
                    onChange={handleInputChangePassword} />
            </div>
            <div>
                <button onClick={goToAdmPage}>Voltar</button>
                <button onClick={postSingUp}>Entrar</button>
            </div>
        </div>
    )
}