import { getAllPostBusiness } from './../../business/post/getAllPostBusiness';
import { Request, Response } from "express";
import { Authenticator } from '../../services/Authenticator';
import { PostDataBase } from '../../data/post/PostDataBase';


export const getAllPost = async (req: Request, res: Response): Promise<void> => {
    
    try {
        const token = req.headers.authorization as string

        const posts = await getAllPostBusiness(token)

        res.status(200).send(posts)
    } catch (error: any) {
        res.status(400).send(error.message)
    }

}