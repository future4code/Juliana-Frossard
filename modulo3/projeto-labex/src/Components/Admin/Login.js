import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { URL_BASE } from '../../Constants/URL'


export default function Login() {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goToAdmPage = () => {
        navigate('/admin/trips/list')
    }



    const postSingUp = (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: password
        }

        axios.post(`${URL_BASE}/login`, body, {
            headers: {
                ContentType: "application/json"
            }
        }).then((response) => {
            console.log("login ok", response.data)
            setEmail("")
            setPassword("")
        }).catch((err) => {
            console.log(err.response)
            setEmail("")
            setPassword("")
            window.alert("Dados incorretos, tente novamente.")
        })

    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }



    return (
        <div>
            <h2>Login</h2>
            <form  onSubmit={postSingUp}>
                <div>
                    <input
                        placeholder="E-mail"
                        value={email}
                        onChange={changeEmail}
                        type="email"
                        required />
                        
                    <input
                        placeholder="Senha"
                        value={password}
                        onChange={changePassword}
                        type="password"
                        required />
                </div>
                <button>Entrar</button>
            </form>
            <button onClick={goToAdmPage}>Voltar</button>
        </div>


    )
}