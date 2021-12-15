import React from 'react';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {ContainerRecipeCard} from './styled'


const RecipeCard = (props) => {

    return(
        <ContainerRecipeCard onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                component ={"img"}
                alt={props.title}
                image={props.image}
                title={props.title}
                />
                <ContainerRecipeCard>
                    <Typography align={"center"}>
                        {props.title.toUpperCase()}
                    </Typography>
                </ContainerRecipeCard>
            </CardActionArea>
        </ContainerRecipeCard>
    )
}

export default RecipeCard