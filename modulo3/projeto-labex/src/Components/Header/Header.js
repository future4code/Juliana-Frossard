import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from '../Img/logo.png'
import styled from "styled-components";
import Login from "../Admin/Login";
import Home from '../Home/Home';

const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #0a1e59;
`
const ImgLogo = styled.img`
width: 150px;
margin-top: 10px;
`
const ButtonHeader = styled.button`
border:none;
border-radius:10px;
display:inline-block;
cursor:pointer;
font-family:  "Arial";
font-size:15px;
padding:8px 20px;
margin: 20px;
margin-right: 50px;
text-decoration:none;
background-color: #0a1e59;
color: white;
&:hover {
    background-color: #27408B;
  }
  `

export default function Header() {
    const [page, setPage] = useState("home")
    
    const choosePage = () => {
        switch (page) {
            case "home":
            return <Home/>    
            case "login":
            return <Login/>    
               default:
                return ("Ops, página não encontrada, tente.")
        }
    }
    const changePageHome = () => {
        setPage("home")
    }
    const changePageLogin = () => {
        setPage("login")
    }


    return (
        <ContainerHeader>
            <ImgLogo src={Logo} />
            <div>
                {choosePage}
                <ButtonHeader>Login</ButtonHeader>
            </div>

        </ContainerHeader>
    );
};