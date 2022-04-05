import React from 'react';
import { Box } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContainerDetailCard, ContainerAvaliation } from './styled'

function DetailCard(props) {
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
                    image={props.poster_path}
                    alt="capa do filme"
                />
                <CardContent>
                    <Typography variant="h5" color="text.secondary" >
                        {props.title} (2016)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        16 anos - {props.release_date} - Ação, Aventura, Comédia -1h47min
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