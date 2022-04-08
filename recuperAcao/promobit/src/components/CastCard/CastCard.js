import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ContainerCastCard, CardCOntent } from './styled'

function CastCard(props) {

    return (
       
        <ContainerCastCard onClick={props.onClick}>
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
                    {props.character}
                </Typography>
            </CardCOntent>
        </ContainerCastCard>
    );
}

export default CastCard;