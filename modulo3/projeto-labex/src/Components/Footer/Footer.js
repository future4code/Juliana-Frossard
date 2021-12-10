import React from "react";
import Logo2 from '../Img/logo2.png'
import styled from "styled-components";

const ContainerFooter = styled.div`
background-color: #0a1e59;
position:absolute;
bottom:0;
width:100%;
`
const ImgLogo2 = styled.img`
width: 400px;
margin-top: 6v  v   0px;
margin-left: 450px;
`

export default function Footer() {


    return (
        <ContainerFooter>
            
            <ImgLogo2 src={Logo2} />

        </ContainerFooter>
    );
};