import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Component } from "react";

//estilização
const Container = styled.div`
 padding: 10px;
 border: 1px solid ;
`

const Card = styled.div`
 display: grid;
 justify-items: center;
`
const Button = styled.button`
 margin-top: 10px;
`

//fim da estilização


export default class ListaDosUsuarios extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        this.getAllUsers()
    }
    //lista de usuarios 
    getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "juliana-frossard-carver"
            }
        }).then((response) => {
            this.setState({ users: response.data })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    //deletar usuario
    deleteUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
            headers: {
                Authorization: "juliana-frossard-carver"
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
    render() {
        const userslist = this.state.users.map((user) =>
            <li key={user.id}>{user.name} - <button>Deletar</button></li>)
        return (
            <Container>
                <Button>Página Inicial</Button>
                <Card>
                    <h2>Lista de Usuários</h2>
                    <ul>
                        {userslist}
                    </ul>

                </Card>

                
            </Container>
        )
    }
}