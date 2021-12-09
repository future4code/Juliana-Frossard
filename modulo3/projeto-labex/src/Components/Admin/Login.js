import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate} from "react-router";


export default function Login() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate.goBack()
    }
    const goToAdmPage=()=>{
        navigate('/admin/trips/list')
       }

    return (
        <div>
           <h2>Login</h2>
            <div>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            </div>
            <div>
            <button onClick={goBack}>Voltar</button>
            <button>Entrar</button>
            </div>
        </div>
    )
}