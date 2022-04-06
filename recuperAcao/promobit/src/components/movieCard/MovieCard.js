import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ContainerMovieCard } from './styled'

function MovieCard(props) {

    return (
        <ContainerMovieCard onClick={props.onClick}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            {props.release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ContainerMovieCard>
    );
}

export default MovieCard;