import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import MatchList from './MatchList'

const ContainerMatchs = styled.div`
    position: center;
    border: 1px solid rgb(240, 53, 91);
	box-shadow: 0 2px 10px 0 rgba(251, 157, 157, 0.77);
     border-radius: 10px;
     height: 460px;
     width: 350px;
     margin-left: 25px;
`

export default function MenuBar(props) {


    return (
        <ContainerMatchs>
            <p>Matchs</p>
            {/* <MatchList/> */}

        </ContainerMatchs>
    )
}