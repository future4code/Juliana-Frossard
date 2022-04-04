
import React from 'react';
import Tracks from './Tracks'
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const StyledButton = styled.button`
 border: none;
 background-color: white;
 border: 1px solid black;
 
`
const ContainerPlaylist = styled.div`
 border: 1px solid green;
 padding: 10px;
`

const CardPlaylist = styled.div`
 
 padding: 15px;
`


const Input = styled.input`
width: 100px;
`
export default class Playlists extends Component {
    state = {
        playlist: [],
        inputValue: "" ,
        inputValueQuery: ""
    }

    componentDidMount() {
        this.getPlayLists()

    }

    handleInputchange = (event) => {
        this.setState({ inputValue: event.target.value })
    }
    handleInputchangeQuery = (event) => {
        this.setState({inputValueQuery: event.target.value})
    }


    getPlayLists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "juliana-frossard-carver"
            }
        }).then((response) => {
            this.setState({ playlist: response.data.result.list })
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    postCreatePlaylists = () => {
        const body = {
            name: this.state.inputValue
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "juliana-frossard-carver"
            }
        }).then((response) => {
            this.setState({ inputValue: "" })
            this.getPlayLists()
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    // playlistQuery = this.state.playlist.filter((item) => {
    //     return item.name.includes(this.state.inputValueQuery)
    // })

    // }
    render() {
        const allPlaylists = this.state.playlist.map((item) =>

            <CardPlaylist key={item.id}>
                <StyledButton>{item.name}</StyledButton>
            </CardPlaylist>)
        
        return (
            <ContainerPlaylist>
                <p>Página Inicial</p>
                <button >OK</button>
                <Input
                    placeholder="Pesquisar..." 
                    value={this.state.inputValueQuery}
                    onChange={this.handleInputchangeQuery}/>

                <p>Minhas Playlists</p>
                
                {this.state.playlist.length > 0 ? <div>
                    {allPlaylists}

                </div> : (<p>Aguarde... :)</p>)}
                <p>Criar Playlist</p>
                <StyledButton onClick={this.postCreatePlaylists}>➕</StyledButton>
                <Input
                    placeholder={"Nome da playlist"}
                    value={this.state.inputValue}
                    onChange={this.handleInputchange} />
                



            </ContainerPlaylist>
        );
    }
}
