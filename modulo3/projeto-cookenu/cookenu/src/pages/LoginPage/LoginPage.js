import React from "react";
import {LogoImg, ScreenContainer, SignUpButton, } from './styled'
import logo from '../../assets/img/logo.png'
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import {goToSignUp} from '../../routes/coordinator'

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <LogoImg src={logo} />
            <LoginForm/>
            <SignUpButton>
                <Button onClick={() => goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >Não possui conta? Cadastre-se aqui!</Button>
            </SignUpButton>
        </ScreenContainer>
    )
}

export default LoginPage;