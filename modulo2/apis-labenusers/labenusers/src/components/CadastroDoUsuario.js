import React from "react";
import styled from "styled-components";
import axios from "axios";



export default class CadastroDoUsuario extends React.Component {
    state = {
        usuario: [],
        inputValueNome: "" ,
        inputValueEmail: ""
    }
    componentDidMount = () => {
       this.postCreateUser()
    }

    handleInputChangeNome = (event) => {
        this.setState({inputValueNome: event.target.value})
    }
    handleInputChangeEmail = (event) => {
        this.setState({inputValueEmail: event.target.value})
    }

    postCreateUser = () => {
        const body = {
            name: this.state.inputValueNome ,
            email: this.state.inputValueEmail 

        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "juliana-frossard-carver"
            }
        }).then((response) => {
            console.log(response.data)
            // this.setState({usuario: response.data})
        }).catch((error) =>{
            console.log(error.response.data)
        })
    }


    render() {
        
        return (
            <div>
                <button onClick={this.props.mudarParaLista}>Lista de Usuários</button>
                <h2>Cadastrar Usuário</h2>
                <input
                placeholder = "nome"
                value = {this.state.inputValueNome}
                onChange={this.handleInputChangeNome}/>
                <input
                placeholder = "email"
                value = {this.state.inputValueEmail}
                onChange={this.handleInputChangeEmail}/>
                
                <button onClick ={this.postCreateUser}>Adicionar</button>
            </div>
        )
    }
}