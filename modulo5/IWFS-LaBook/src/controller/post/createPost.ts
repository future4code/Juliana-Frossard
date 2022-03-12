import { Post } from "../../model/post";
import { Request, Response } from "express";
import { Authenticator } from "../../services/Authenticator";
import { PostDataBase } from "../../data/post/PostDataBase";
import { IdGenerator } from "../../services/IdGenerator";
import { createPostBusiness } from "../../business/post/createPostBusiness";
import { stringify } from "querystring";

export const createPost = async (req: Request, res: Response) => {

    try {
        const token = req.headers.authorization as string

        const { photo, description, role } = req.body

        await createPostBusiness(
            token, photo, description, role)

        res.status(201).send({ message: 'Post criado com sucesso' })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}