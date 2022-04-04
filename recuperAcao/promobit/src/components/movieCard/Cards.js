import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ContainerCards } from './styled'

function Cards() {
    return (
        <ContainerCards>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="http://pm1.narvii.com/6818/5ddc250a152d103910eb197397329de9d1950ad6v2_00.jpg"
                        alt="filme da moana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            MOANA
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            dia de hoje
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ContainerCards>
    );
}

export default Cards;