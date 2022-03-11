import { Post } from "../../model/post";
import { Request, Response } from "express";
import { Authenticator } from "../../services/Authenticator";
import { PostDataBase } from "../../data/post/PostDataBase";
import { IdGenerator } from "../../services/IdGenerator";

export const createPost = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        const { photo, description, role } = req.body

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

        
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const newDate = new Date()
        const creationDate = (
            (newDate.getDate())) + "/" + ((newDate.getMonth())) + "/" + newDate.getFullYear()

        const userId = tokenData.id

        const newPost = new Post(id, userId, photo, description, creationDate, role)
        const postDataBase = new PostDataBase();
        
        await postDataBase.createPost(newPost)

        res.status(200).send({ message: 'Post criado com sucesso'})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}