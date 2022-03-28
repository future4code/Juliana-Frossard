import { UserDataBase } from './../../data/user/UserDataBase';
import { Authenticator } from '../../services/Authenticator';


export const getAllUsersBusiness = async (
    token: string) => {

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

        const userDataBase = new UserDataBase();
        const allUsers = await userDataBase.getAllUser()

    return allUsers

}