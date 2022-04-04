import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';



const ContainerHeader = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 15px;
 border: 1px solid red;
 background-color: hotpink;
`


export default class Header extends Component {

   
  render() {
    return (
      <ContainerHeader>
        <h1>HEADER</h1>
        <div>
        
        </div>
      </ContainerHeader>
    );
  }
}