import React from 'react';
import { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styled from 'styled-components';
import axios from 'axios';
import Playlists from './Components/PlayLists';

const Container = styled.div`
border: 1px solid;

`


export default class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <div>
          
          </div>
          <Playlists/>
        
        <Footer/>
        
      </Container>
    );
  }
}