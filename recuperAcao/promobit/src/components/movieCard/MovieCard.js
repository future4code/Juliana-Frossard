import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ContainerMovieCard, CardCOntent } from './styled'

function MovieCard(props) {
    
    const date = () => {
        const releaseDate = props.release_date
        return releaseDate.split('-').reverse().join('/');
    }
    return (
        <ContainerMovieCard onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                />
                <CardCOntent>
                <Typography
                        variant="body1"
                        fontWeight='bold'
                        component="div"
                    >
                        {props.title}
                    </Typography>
                    <Typography
                    align='center'
                        variant="body2"
                    >
                        {props.known_for_department}  ({date()})
                    </Typography>
                </CardCOntent>
            </CardActionArea>
        </ContainerMovieCard>
    );
}

export default MovieCard;