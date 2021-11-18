import React from 'react';
import Tracks from './Tracks'
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DeletePlaylist from './DeletePlayList'

const StyledButton = styled.button`
 border: none;
 background-color: white;
`
const ContainerPlaylist = styled.div`
 border: 1px solid green;
`
const PlaylistDiv = styled.div`
 display: flex;
`
const CardPlaylist = styled.div`
 border: 1px solid pink;
 padding: 15px;
`
const CardDeletePlaylist = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export default class Playlists extends Component {
    state = {
        playlist: [],
        inputValue: ""
    }

    componentDidMount() {
        this.getPlayLists()
       
    }

    handleInputchange = (event) => {
        this.setState({ inputValue: event.target.value })
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



    render() {
        const allPlaylists = this.state.playlist.map((item) =>

            <CardPlaylist key={item.id}>
                <CardDeletePlaylist>
                <div>
                <PlaylistDiv>
                    <StyledButton>🔲</StyledButton>
                    <li>- {item.name}</li>
                </PlaylistDiv>
                <span onClick="">aqui vai a lista de tracks
                <Tracks/></span>
                </div>
                <DeletePlaylist  state={this.state.playlist}>X</DeletePlaylist>
                </CardDeletePlaylist>
            </CardPlaylist>)

        

        return (
            <ContainerPlaylist>
                <input
                    placeholder={"Nome da playlist"}
                    value={this.state.inputValue}
                    onChange={this.handleInputchange} />
                <StyledButton onClick={this.postCreatePlaylists}>➕</StyledButton>

                {this.state.playlist.length > 0 ? <ul>
                    {allPlaylists}

                </ul> : (<p>Aguarde... :)</p>)}

            </ContainerPlaylist>
        );
    }
}