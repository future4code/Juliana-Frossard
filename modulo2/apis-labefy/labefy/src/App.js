import React from 'react';
import { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Playlists from './Components/PlayLists';
import PlayTracks from './Components/PlayTracks';
import Menu from './Components/Menu'
import styled from 'styled-components';
import axios from 'axios';


const Container = styled.div`
border: 1px solid;

`
const Body = styled.div`
 border:2px solid navy;
 display: flex;
`


export default class App extends Component {
  state = {
    playlist: [],
    inputValue: "" ,
    inputValueQuery: ""
}
  render() {
    return (
      <Container>
        <Header />
        <Body>
          
            <Menu />
            
            <PlayTracks />
            
          
        </Body>
        <Footer />

      </Container>
    );
  }
}