import { PostDataBase } from "../../data/post/PostDataBase";
import { Authenticator } from "../../services/Authenticator";

export const getPostBusiness = async (
    token: string,
    id: string) => {

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

    const postDataBase = new PostDataBase()
    const postId = postDataBase.findPostById(id)

    return postId
}