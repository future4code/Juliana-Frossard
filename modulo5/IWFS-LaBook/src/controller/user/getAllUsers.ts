import { UserDataBase } from './../../data/user/UserDataBase';
import { BaseDataBase } from "../../data/BaseDataBase";
import { Request, Response } from "express";
import { Authenticator } from '../../services/Authenticator';


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        if (!token) {
            errorCode = 422
            throw new Error("Esse endpoint necessita de autorização");
        };

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        if (tokenData.role !== 'ADMIN') {
            errorCode = 401
            throw new Error("Somente usuario ADM pode acessar essa funcionalidade");
        };

        const userDataBase = new UserDataBase();
        const users = await userDataBase.getAllUser()

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message)
    }

}