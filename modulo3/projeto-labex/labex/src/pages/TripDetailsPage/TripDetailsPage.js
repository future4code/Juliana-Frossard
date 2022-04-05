import React from 'react'
import { Button, Typography } from '@mui/material';
import InfoTrip from './InfoTrip';
import CandidateList from './CandidateList';
import { ContentContainer } from './styled'
import { useNavigate } from 'react-router-dom';
import {goBackPage} from '../../routes/coordinaitor'
import {ScreenContainer} from '../../Global/GlobalStyled'
import useProtectedPage from '../../hooks/useProtectedPage'

const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  return (
    <ScreenContainer>
      <Typography
        variant='h2' gutterBottom align='center' color="secondary">
        Detalhes da Viagem</Typography>

      <ContentContainer>
        <InfoTrip />
        <CandidateList />
      </ContentContainer>
      <Button
        type={'submit'} color={"primary"} variant={"contained"}
        margin={"dense"} size={"large"}
        onClick={() => goBackPage(navigate)}
        >Voltar</Button>
   </ScreenContainer>
  )
}

export default TripDetailsPage;