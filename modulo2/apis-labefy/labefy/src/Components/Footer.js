import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerFooter = styled.div `
background-color: purple;
`


export default class Footer extends Component {
  render() {
    return (
      <ContainerFooter>
        <h1>FOOTER</h1>
        
      </ContainerFooter>
    );
  }
}