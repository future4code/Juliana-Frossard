import React from 'react'
import Button from '@mui/material/Button';
import { ScreenContainer } from '../../Global/GlobalStyled'
import { useNavigate } from 'react-router-dom';
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinaitor'
import { Typography } from '@mui/material';


const HomePage = () => {
  const navigate = useNavigate()

  return (
    <ScreenContainer>
      <Typography
        variant='h1' gutterBottom color="secondary">
        Labex</Typography>
      <Typography
        variant="h4" gutterBottom color="gray">
        Conheça nossas viagens</Typography>
      <Button
        onClick={() => goToListTripsPage(navigate)}
        type={'submit'} color={"primary"} variant={"contained"} 
        margin={"normal"} size={"large"}
      >VIAGENS</Button>
      <Button
        onClick={() => goToLoginPage(navigate)}
        color={"primary"} margin={"normal"} 
      >Login</Button>

    </ScreenContainer>
  )
}

export default HomePage;