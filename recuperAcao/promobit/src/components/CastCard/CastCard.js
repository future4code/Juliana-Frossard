import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ContainerCastCard, CardCOntent } from './styled'

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
                        variant="h6"
                        fontSize="bold"
                        component="div"
                    >
                        {props.name}
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        {props.character}
                    </Typography>
                </CardCOntent>
            </CardActionArea>
        </ContainerCastCard>
    );
}

export default CastCard;