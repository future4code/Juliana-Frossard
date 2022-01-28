import React from "react";
import TripInformation from "./TripInformation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const TripsCard = (props) => {

    return (
        <Card>
            <CardContent>
                <Typography s
                    variant='h4'
                    gutterBottom
                    align='start'
                    color="primary">
                    Informações da viagem
                </Typography>
                <Typography variant="h5" component="div">
                    Nome da Viagem
                </Typography>
                <TripInformation infoTitle={"Nome"} info={"teste"}/>
                <TripInformation infoTitle={"Planeta"} info={"teste"}/>
                <TripInformation infoTitle={"Descrição"} info={"teste"}/>
                <TripInformation infoTitle={"Duração em dias"} info={"teste"}/>
                <TripInformation infoTitle={"Data"} info={"teste"}/>


            </CardContent>

        </Card>
    );
}
export default TripsCard;