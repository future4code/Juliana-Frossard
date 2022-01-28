import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { ScreenContainer } from '../../Global/GlobalStyled';
import useProtectedPage from '../../hooks/useProtectedPage'


const CreateTripPage = () => {
  useProtectedPage()

  return (

    <ScreenContainer>
      <Typography
        variant='h2' gutterBottom align='center' color="secondary">
        Criar viagem         </Typography>

      <div>
        <TextField label={"Nome"} />
        <TextField label={"Planeta"} />
        <TextField label={"Descrição"} />
        <TextField label={"Data"} />
        <TextField label={"Duração em dias"} type={Number} />
      </div>

      <div>
        <Button
          type={'submit'} color={"primary"} variant={"contained"}
          margin={"dense"} size='medium' fullWidth
        >Criar.</Button>

        <Button
          type={'submit'} color='primary' variant={"text"}
          margin={"dense"} fullWidth
        >Voltar</Button>
      </div>

    </ScreenContainer>



  )
}

export default CreateTripPage;