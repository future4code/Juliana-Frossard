import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage'


const RecipeListPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>RecipeListPage</h1>
                </div>
    )
}

export default RecipeListPage;