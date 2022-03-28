import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { goToAplicationFormPage, goBackPage } from '../../routes/coordinaitor'
import { ScreenContainer1, TripContainer } from './styled'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TripsCard from '../../components/TripsCard/TripsCard'


const ListTripsPage = () => {
  const trips = useRequestData([], `${BASE_URL}/trips`)
  const navigate = useNavigate()
  console.log(trips)

  const tripsList = trips.map((trip) => {
    return (
      <TripsCard key={trip.id}
        name={trip.name}
        date={trip.date}
        planet={trip.planet}
        description={trip.description}
        durationInDays={trip.durationInDays}
      />

    )
  })
  return (
    <ScreenContainer1>
      <Typography
        variant='h1'
        gutterBottom
        align='center'
        color="#467089">
        Viagens</Typography>
      
        <Button
          onClick={() => goToAplicationFormPage(navigate)}
          type={'submit'}
          color={"primary"}
          variant={"contained"}
          margin={"dense"}
          size={"large"}

        >Inscreva-se</Button>
        <br />

      <TripContainer>
        {tripsList}
      </TripContainer>
      <div>
      <Button
        type={'submit'}
        color={"primary"}
        variant={"contained"}
        margin={"dense"}
        size={"large"}
        onClick={() => goBackPage(navigate)}>Voltar</Button>
      </div>
          </ScreenContainer1>
  )
}

export default ListTripsPage;