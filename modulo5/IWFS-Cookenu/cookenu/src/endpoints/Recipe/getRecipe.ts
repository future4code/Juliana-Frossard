import { Request, Response } from "express";
import getTokenData from "../../services/dataToken";
import getRecipeById from "../helps/getRecipeById";

const getRecipe = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const token = req.headers.Authorization as string

        if (!id) {
            res.statusCode = 422
            throw new Error("Insira o params 'id'");
        };
        if (!token) {
            res.statusCode = 401
            throw new Error("Esse endpoint necessita de autorização");
        };
        const tokenAutentication = getTokenData(token)

        if (!tokenAutentication) {
            res.statusCode = 422
            throw new Error("Autorização inválida");
        };

        const recipe = await getRecipeById(id)
        console.log(recipe)
        if (!recipe) {
            res.statusCode = 400
            throw new Error("Receita nao encontrada");
        };

        res.status(200).send({ recipe })


    } catch (error: any) {
        res.status(500).send({ message: error.message || error.Sqlmessage })
    }
}
export default getRecipe;