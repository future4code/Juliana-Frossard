import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ContainerCastCard, CardCOntent } from './styled'
import { CardActionArea } from '@mui/material';

function CastCard(props) {

    return (
        <ContainerCastCard onClick={props.onClick}>
            <CardActionArea>
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/original/${props.profile_path}`}
            />
            <CardCOntent>
                <Typography
                    variant="body1"
                    fontWeight='bold'
                    component="div"
                >
                    {props.name}
                </Typography>
                <Typography
                    variant="body2"
                >
                    {props.data}
                </Typography>
            </CardCOntent>
            </CardActionArea>
        </ContainerCastCard>
    );
}

export default CastCard;