import { Request, Response } from "express";
import { PostDataBase } from "../../data/post/PostDataBase";
import { Authenticator } from "../../services/Authenticator";

export const getPost = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        const id = req.body
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

        const postDataBase = new PostDataBase()
        const posts = postDataBase.findPostById(id)

        res.status(200).send(posts)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}