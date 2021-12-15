import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import {RecipeListContainer, AddRecipeButton} from './styled'
import { useNavigate } from "react-router-dom";
import {goToAddRecipes, goToRecipesDetail} from '../../routes/coordinator'


const RecipeListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToRecipesDetail(navigate, id)
    }
    
    const recipes = useRequestData([],` ${BASE_URL}/recipe/feed`)
    console.log(recipes)

    const recipesCard = recipes.map((recipe) => {
        return (
            <RecipeCard
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })
    
    return (
        <RecipeListContainer>
            {recipesCard}
            <AddRecipeButton
            color={"primary"}
            onClick={()=> goToAddRecipes(navigate)}>+</AddRecipeButton>
            

        </RecipeListContainer>
    )
}

export default RecipeListPage;