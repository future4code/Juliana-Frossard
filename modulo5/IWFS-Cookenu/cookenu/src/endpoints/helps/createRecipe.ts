import connection from "../../data/connection";
import { recipeTable } from "../../data/tables";

const createRecipe = async (
    id: string,
    title: string,
    description: string,
    date: string) => {
    await connection(recipeTable)
        .insert({
            id,
            title,
            description,
            date
        })
}

export default createRecipe;