import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ContainerMovieCard, CardCOntent } from './styled'

function MovieCard(props) {

    return (
        <ContainerMovieCard onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                />
                <CardCOntent>
                    <b><Typography
                        gutterBottom
                        variant="body1"
                        fontSize="bold"
                        component="div"
                    >
                        {props.title}
                    </Typography></b>
                    <Typography
                        variant="body1"
                    >
                        {props.known_for_department} - {props.release_date}
                    </Typography>
                </CardCOntent>
            </CardActionArea>
        </ContainerMovieCard>
    );
}

export default MovieCard;