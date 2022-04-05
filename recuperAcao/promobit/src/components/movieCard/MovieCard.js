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
                        image='https://i.pinimg.com/550x/43/e5/44/43e5440d7f63b378cbe5693a79b55c8b.jpg'

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