import { Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeContainer, RecipeImage, ScreenContainer } from './styled'

const RecipeDetailPage = () => {
    useProtectedPage()

    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

    return (
        <ScreenContainer>
            <RecipeContainer>
                <RecipeImage src={recipe && recipe.image} />
                <Typography gutterBottom align={"center"} variant={"h5"} color={"primary"}>{ recipe && recipe.title}</Typography>
                <Typography align={"center"}>{recipe && recipe.description}</Typography>
            </RecipeContainer>

        </ScreenContainer>
    )
}

export default RecipeDetailPage;