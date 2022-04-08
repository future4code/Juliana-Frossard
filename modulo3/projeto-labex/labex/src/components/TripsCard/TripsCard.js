import React from 'react';
import Typography from '@mui/material/Typography';
import { TripCardContainer, NameStyled } from './styled'
import TripInfoCard from "./TripInfoCard"
import { goToTripDetailPage } from '../../routes/coordinaitor';
import { useNavigate } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';



const TripsCard = (props) => {
const navigate = useNavigate()
    return (
        <TripCardContainer  onClick={() => goToTripDetailPage(navigate)} sx={{ minWidth: 300 }}>
            <CardActionArea>
            <CardActions>
                <div>
                    <Typography align={'start'} variant="h5" color={"navy"} gutterBottom >
                        {props.name}
                    </Typography>


                    <TripInfoCard infoName={"Planeta"} />
                    <Typography align={'start'} gutterBottom >
                        {props.planet}
                    </Typography>
                    <TripInfoCard infoName={"Descrição"} />
                    <Typography align={'start'} gutterBottom >
                        {props.description}
                    </Typography>
                    <TripInfoCard infoName={"Duração"} />
                    <Typography align={'start'} gutterBottom >
                        {props.durationInDays} dias
                    </Typography>
                    <TripInfoCard infoName={"Data"} />
                    <Typography align={'start'} gutterBottom >
                        {props.date}
                    </Typography>
                    
                </div>
            </CardActions>
            </CardActionArea>
            <Button onClick={() => goToTripDetailPage(navigate)}>Detalhes</Button>
        </TripCardContainer>
    );
}


export default TripsCard