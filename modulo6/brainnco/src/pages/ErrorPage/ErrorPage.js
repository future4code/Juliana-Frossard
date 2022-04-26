import React from "react";
import error from '../../assets/img/error.png'
import {Container, ErrorImg} from './styled'

const ErrorPage = () => {
    return (
        <Container>
            <ErrorImg src={error}/>
        </Container>
    );
}

export default ErrorPage;