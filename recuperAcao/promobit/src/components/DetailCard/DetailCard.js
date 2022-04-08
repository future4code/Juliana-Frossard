import React from 'react';
import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContainerDetailCard, ContainerAvaliation } from './styled'
import useRequestData from '../../hooks/useRequestData';


function DetailCard(props) {

        const runtime = () => {
        const hour = Math.floor(props.runtime / 60);
        const min = props.runtime % 60;
        const textHour = (`00${hour}`).slice(-2);
        const textMin = (`00${min}`).slice(-2);
        return `${textHour}h${textMin}m`;
    }
    const ageGroup = () => {
        const age = props.adult
        if(age == 'false'){
            return ("Livre")
        }
        else{
            return ('16 anos')
        }
    }

    const date = () => {
        const releaseDate = props.release_date
        return releaseDate.split('-').reverse().join('/');
    }

    const genre = () => {
        const genres = props.genres
        return genres.map((item) => {
            return ` ${item.name},`
        })
    }

    return (

        <Box
            sx={{
                height: 350,
                bgcolor: 'primary.main'
            }}>
            <ContainerDetailCard>
                <CardMedia
                    component="img"
                    sx={{ width: 200, height: 350 }}
                    image={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                    alt="capa do filme"
                />
                <CardContent>
                    <Typography variant="h5" color="text.secondary" >
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {} - {props.release_date} - ação {runtime()}
                    </Typography>
                    <ContainerAvaliation>
                        <Fab color='secondary' size='medium'>{props.vote_average}</Fab>
                        <Typography variant="body2" color="text.secondary">
                            - Avaliação dos usuários
                        </Typography>

                    </ContainerAvaliation>
                    <Typography variant="body2" color="text.secondary">
                        {props.overview}


                    </Typography>
                </CardContent>
            </ContainerDetailCard >
        </Box >

    )
};

export default DetailCard;