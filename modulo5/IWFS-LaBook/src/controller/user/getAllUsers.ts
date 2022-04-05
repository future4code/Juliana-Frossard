import { Request, Response } from "express";
import { getAllUsersBusiness } from '../../business/user/getAllUserBusiness';


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  
    try {
        const token = req.headers.authorization as string
        
        const users = await getAllUsersBusiness(token)

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send(error.message)
    }

}