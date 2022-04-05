import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import {ContainerMoviesCast} from './styled'

function MoviesCastCard() {
    return (
        <ContainerMoviesCast>
            <Card  sx={{ width: 180, height: 350 }}>
            <CardMedia
                component="img"
                sx={{height: 250 }}
                image="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2017/12/07/646306/20171207161212511120a.jpg"
                alt="ator"
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    Ryab Reynolds
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Deadpol
                </Typography>
            </CardContent>
            </Card>
        </ContainerMoviesCast>

    )
};

export default MoviesCastCard;