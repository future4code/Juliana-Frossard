import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import RatingCard from '../RatingCard/RatingCard';
import {
    ContainerDetailCard, ContainerAvaliation, InfoContainer,
    CardIMG, Title, DetailInformation
} from './styled'

function DetailCard(props) {

    const runtime = () => {
        const hour = Math.floor(props.runtime / 60);
        const min = props.runtime % 60;
        const textHour = (`00${hour}`).slice(-2);
        const textMin = (`00${min}`).slice(-2);
        return `${textHour}h${textMin}m`;
    }

    const date = () => {
        if(props.release_date){
            return props.release_date.split('-').reverse().join('/');
        }
    }

    const genre = () => {
        if (props.genres) {
            return (
                props.genres.map((item) => {
                    return <Typography> {item.name} |</Typography>
                })
            )
        }
    }
    return (

        <Box
            sx={{
                height: 350,
                bgcolor: 'primary.main'
            }}>
            <ContainerDetailCard>
                <CardIMG
                    component="img"
                    sx={{ width: 200, height: 350 }}
                    image={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                    alt="capa do filme"
                />
                <InfoContainer>
                    <Title variant="h4" color="text.secondary" >
                        {props.title}
                    </Title>
                    <DetailInformation variant="body2" color="text.secondary">
                        <Title>{date()}</Title>
                    </DetailInformation>
                    <DetailInformation variant="body2" color="text.secondary">
                        {genre()}
                        <Title>{runtime()}</Title>
                    </DetailInformation>
                    <RatingCard vote_average={props.vote_average} />
                    <DetailInformation>
                        <Title variant="h5" color="text.secondary">Sinopse</Title>
                    </DetailInformation>
                    <Title variant="body1" color="text.secondary">
                        {props.overview}
                    </Title>
                </InfoContainer>
            </ContainerDetailCard >
        </Box >


    )
};

export default DetailCard;