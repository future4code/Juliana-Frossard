import { Request, Response } from 'express';
import getData from '../services/getData';
import getUserById from './getUserById';


const userProfile = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string;
        const authentication = getData(token)
        if (!token) {
            res.statusCode = 422
            throw new Error("Informe o token'")
        }
        if (authentication.role !== "normal") {
            res.statusCode = 403
            throw new Error(
                "Sem permissão. Somente usuario 'normal' pode acessar essa pagina"
            );
        };

        const user = await getUserById(authentication.id)
        const profile = { id: user.id, email: user.email }

        res.status(200).send({ profile })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        }
    }
}

export default userProfile;