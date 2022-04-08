import { Post, POST_ROLES } from "../../model/post";
import { Authenticator } from "../../services/Authenticator";
import { PostDataBase } from "../../data/post/PostDataBase";
import { IdGenerator } from "../../services/IdGenerator";

export const createPostBusiness = async (
    token:string,
    photo: string,
    description: string,
    role: POST_ROLES
) => {
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
        
        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const createdAt = new Date()

        const userId = tokenData.id

        const newPost = new Post(id, userId, photo, description, createdAt, role)
        const postDataBase = new PostDataBase();
        
        await postDataBase.createPost(newPost)

        
}