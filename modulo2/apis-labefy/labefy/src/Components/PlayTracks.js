import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerPlayTracks = styled.div`
 border: 2px solid gray;
`

export default class PlatTracks extends Component {
      
  render() {
    
    return (
      <ContainerPlayTracks>
        PlayTracks
        
      </ContainerPlayTracks>
    );
  }
}
