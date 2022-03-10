import { Post } from "../../model/post";
import { Request, Response } from "express";

export const createPost = async(req:Request, res:Response): Promise<Post>{
    let errorCode = 400
try {
    const token = req.headers.authorization
    if (!token) {
        errorCode = 422
        throw new Error("Esse endpoint necessita de autorização");
    };
    

} catch (error: any) {
    res.status(400).send(error.message)
 }
}