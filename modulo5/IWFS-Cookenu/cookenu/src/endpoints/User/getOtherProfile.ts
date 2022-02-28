import { Request, Response } from "express";
import getTokenData from "../../services/dataToken";
import getUserById from "../helps/getUserById";



const getOtherProfile = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const token = req.headers.Authorization as string

        if (!id || !token) {
            res.statusCode = 422
            throw new Error("Parametro e autorização obrigatório ('id' e 'token')");
        };

        const tokenAutentication = getTokenData(token)

        if (!tokenAutentication) {
            res.statusCode = 401
            throw new Error("Token invalido");
        };

        const user = await getUserById(id)

        if (!user) {
            res.statusCode = 400
            throw new Error("Usuario nao encontrado");
        };


        if (tokenAutentication.id != user.id) {
            res.statusCode = 400
            throw new Error("Conflito de informações ('id' e 'token')");
        };

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.Sqlmessage })
    }
}

export default getOtherProfile;