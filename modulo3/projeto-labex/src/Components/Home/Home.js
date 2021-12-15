import React from "react";
import { useNavigate} from "react-router";
import styled from "styled-components";

const Container = styled.div`
display: grid;
 justify-content: center;
 align-items: center;
 align-content: center;
 `
const P = styled.p`
font-size: 40px;
font-family:  "Arial";
color: white;
`
const Button = styled.button`
border-radius: 4px;
background-color: #73d3dd;
border: none;
margin: 10px;
margin-left: 240px;
width: 250px;
height: 45px;
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
export default function HomePage() {
 const navigate = useNavigate()
 
 const goToListTrip=()=>{
  navigate("/trips/list")
 };

 const goToAdmPage=()=>{
  navigate('/admin/trips/list')
 }


  return (
  <Container>
    <P>Conheça mais sobre nossas viagens</P>
    <div>
    <Button primary onClick={goToListTrip}>Destinos</Button>
    </div>
  </Container>
  );
};