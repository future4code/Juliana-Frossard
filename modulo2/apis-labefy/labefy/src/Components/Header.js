import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Filter from './Filter'


const ContainerHeader = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 15px;
 border: 1px solid red;
`


export default class Header extends Component {

  getSearchPlaylist = () => {
    axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers:{
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
      <ContainerHeader>
        <h1>HEADER</h1>
        <div>
        <Filter/>
        </div>
      </ContainerHeader>
    );
  }
}