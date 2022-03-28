import { Request, Response } from "express";
import { getPostBusiness } from "../../business/post/getPostByIdBusiness";
import { PostDataBase } from "../../data/post/PostDataBase";
import { Authenticator } from "../../services/Authenticator";

export const getPost = async (req: Request, res: Response): Promise<void> => {

    try {
        const token = req.headers.authorization as string
        const id = req.body as string

        const post = getPostBusiness(token, id)

        res.status(200).send(post)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}