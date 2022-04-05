import React from 'react'
import { ScreenContainer1, TripContainer } from './styled'
import { Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import useProtectedPage from '../../hooks/useProtectedPage';
import TripsCard from '../../components/TripsCard/TripsCard';
import { goToCreateTripPage, goBackPage, 
goToAplicationFormPage } from '../../routes/coordinaitor'


const ListTripsPageClose = () => {
  useProtectedPage()
  
  const trips = useRequestData([], `${BASE_URL}/trips`)
  const navigate = useNavigate()
  console.log(trips)

  const tripsList = trips.map((trip) => {
    return (
      <TripsCard key={trip.id}
        name={trip.name} date={trip.date} planet={trip.planet}
        description={trip.description} durationInDays={trip.durationInDays} />
    )
  })
  return (
    <ScreenContainer1>
      <Typography
        variant='h1' gutterBottom align='center' color="#467089">
        Viagens</Typography>

      <Button
        onClick={() => goToAplicationFormPage(navigate)}
        type={'submit'} color={"primary"} variant={"contained"}
        margin={"dense"} size={"large"}
      >Inscreva-se</Button>
      <br />
      <Button
        onClick={() => goToCreateTripPage(navigate)}
        type={'submit'} color={"primary"} variant={"text"}
        margin={"dense"} size={"large"}
      >Criar Viagens       </Button>

      <TripContainer>
        {tripsList}
      </TripContainer>

      <div>
        <Button
          type={'submit'} color={"primary"} variant={"contained"}
          margin={"dense"} size={"large"}
          onClick={() => goBackPage(navigate)}
        >Voltar         </Button>
      </div>

    </ScreenContainer1>
  )
}

export default ListTripsPageClose;