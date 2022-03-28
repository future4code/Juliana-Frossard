import { Request, Response } from "express";
import { Authenticator } from '../../services/Authenticator';
import { PostDataBase } from '../../data/post/PostDataBase';


export const getAllPostBusiness = async (
    token:string) => {
    let errorCode = 400
    
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

        const postDataBase = new PostDataBase();
        const allPosts = await postDataBase.getAllPost()

        return allPosts

   }