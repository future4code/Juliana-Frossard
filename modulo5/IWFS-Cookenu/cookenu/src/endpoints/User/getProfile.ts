import getTokenData from '../../services/dataToken'
import { Request, Response } from "express";
import getUserById from '../helps/getUserById';


const getProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.Authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error("Esse endpoint necessita de autorização");
        };

        const tokenAutentication = getTokenData(token)

        if (!tokenAutentication) {
            res.statusCode = 422
            throw new Error("Autorização incorreta");
        };

        const user = await getUserById(tokenAutentication.id)

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error:any) {
        res.status(500).send({ message: error.message || error.Sqlmessage })
    }
}

export default getProfile;