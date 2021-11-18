import React from 'react';
import { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';

const StyledButton = styled.button`
 border: none;
 background-color: white;
`
export default class Filter extends Component {
  state = {
    search: ""
  }
  updateSearch = (event) => {
    this.setState({search: event.target.value})
  }
  
  render() {
    return (
      <div>
        <input
        placeholder="Pesquisar"
        value={this.state.search}
        onChange={this.updateSearch}/>
        <StyledButton>🔎</StyledButton>
        
      </div>
    );
  }
}