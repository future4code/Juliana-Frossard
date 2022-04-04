import React from 'react'
import logo from '../../assets/img/logo.png'
import { LogoImg, ScreenContainer, SignUpButton } from './styled'
import { Button } from '@material-ui/core'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { goBackPage } from '../../routes/coordinaitor'
import LoginForm from './LoginForm'

const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <ScreenContainer>
      
      <LogoImg src={logo} />
      <Typography
            variant='h2'
            gutterBottom
            align='center'
            color="secondary">
              Login</Typography>
      <LoginForm />
      <SignUpButton>
        
        <Button
          onClick={() => goBackPage(navigate)}
          type={'submit'}
          color='primary'
          variant={"text"}
          margin={"dense"}
          fullWidth
        >Voltar</Button>
      </SignUpButton>
    </ScreenContainer>
  )
}

export default LoginPage;