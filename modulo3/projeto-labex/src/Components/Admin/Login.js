import React from 'react';
import { useState, useEffect } from 'react';


export default function Login() {

    return (
        <div>
           <h2>Login</h2>
            <div>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            </div>
            <div>
            <button>Voltar</button>
            <button>Entrar</button>
            </div>
        </div>
    )
}