import connection from "../../data/connection";
import { recipeTable } from "../../data/tables";



const getRecipeById = async (id: string) => {
    const result = await connection(recipeTable)
        .select('*')
        .where({ id })
        
    return result[0]
}

export default getRecipeById;