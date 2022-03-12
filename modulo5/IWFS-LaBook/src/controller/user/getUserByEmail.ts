import { UserDataBase } from '../../data/user/UserDataBase';
import { Request, Response } from 'express';
import { getUserByEmailBisness } from '../../business/user/getUserByEmailBisness';



export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const { email } = req.body

        const user = await getUserByEmailBisness(token, email)

        res.status(200).send(user)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}