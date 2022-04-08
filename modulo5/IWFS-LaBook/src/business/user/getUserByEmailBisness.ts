import { UserDataBase } from '../../data/user/UserDataBase';
import { Authenticator } from '../../services/Authenticator';


export const getUserByEmailBisness = async (
    token: string,
    email: string) => {

    let errorCode = 400
    if (!token) {
        errorCode = 422
        throw new Error("Esse endpoint necessita de autorização");
    };
    if (!email) {
        errorCode = 422
        throw new Error("Falta informação no body");
    };

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)
    if (tokenData.role !== 'ADMIN') {
        errorCode = 401
        throw new Error("Somente usuario ADM pode acessar essa funcionalidade");
    };

    const userDataBase = new UserDataBase();
    const userEmail = await userDataBase.findUserByEmail(email)
    
    if (!userEmail) {
        errorCode = 409
        throw new Error("Email não cadastrado");
     };

    return userEmail

}