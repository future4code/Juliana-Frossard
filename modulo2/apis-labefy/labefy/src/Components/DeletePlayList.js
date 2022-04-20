import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class DeletePlayList extends Component {

  deletePlaylist = (id) => {
      const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist${id}`
    axios.delete(url, {
        headers: {
            Authorization: "juliana-frossard-carver"
        }
    }).then((response) => {
        console.log(response.data)
    }).catch((err) => {
        console.log(err.response.data)
    })
}
  render() {
    return (
      <div>
        
      </div>
    );
  }
}