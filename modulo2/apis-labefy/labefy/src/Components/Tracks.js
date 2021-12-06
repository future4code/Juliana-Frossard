import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class Filter extends Component {
    state = {
        tracks: [],
    }
    componentDidMount() {
        this.getPlaylistTracks()
    }
    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "juliana-frossard-carver"
            }
        }).then((response) => {
            this.setState({ tracks: response.data })
        }).catch((err) => {
            console.log(err.response.data)
        })
    }
  
  render() {
    const allTracks = this.state.tracks.map((track) => <span>{track.name}</span>)
    return (
      <div>
        {allTracks}
      </div>
    );
  }
}


