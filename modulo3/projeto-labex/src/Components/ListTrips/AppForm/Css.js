import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
 align-items: center;
 align-content: center;
 width: 100%;
 height: 100%;
 margin-bottom: 20px;
 `
export const Form = styled.form`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: stretch;
  align-content: center;
  width: 600px;
  `
export const P = styled.p`
font-size: 40px;
font-family:  "Arial";
color: white;
`
export const Button = styled.button`
border-radius: 4px;
background-color: #73d3dd;
border: none;
margin: 10px;
margin-left: 240px;
width: 200px;
height: 35px;
color: #0a1e59;
font-size: 20px;
font-family:  "Arial";
cursor: pointer;
&:hover {
    border: 1px solid green;
    color: white;
    background-color: #72d1dc;
  }
`
