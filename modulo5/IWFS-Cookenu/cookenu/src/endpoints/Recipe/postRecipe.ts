import { Request, Response } from "express";
import getTokenData from "../../services/dataToken";
import { IdGenarator } from "../../services/idGenerator";
import createRecipe from "../helps/createRecipe";
import getUserById from '../helps/getUserById';
import createJoin from "../helps/createJoin";

const postRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body
        const token = req.headers.Authorization as string
        const id = IdGenarator()
        const newDate = new Date()
        const date = (
            (newDate.getDate())) + "/" + (
                (newDate.getMonth() + 1)) + "/" + newDate.getFullYear();


        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Insira todos os campos('title' e 'description')");
        };
        if (!token) {
            res.statusCode = 401
            throw new Error("Esse endpoint necessita de autorização");
        };
        const tokenAutentication = getTokenData(token)

        if (!tokenAutentication) {
            res.statusCode = 422
            throw new Error("Autorização invalida");
        };

        await createRecipe(id, title, description, date);
        await getUserById(tokenAutentication.id);
        await createJoin(tokenAutentication.id, id)

        res.status(201).send("Receita criada com sucesso.")

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        }
    }
}

export default postRecipe;