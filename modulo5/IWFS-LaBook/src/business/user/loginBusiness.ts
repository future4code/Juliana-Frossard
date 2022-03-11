import { HashManager } from '../../services/HashManager';
import { UserDataBase } from '../../data/user/UserDataBase';
import { Authenticator } from '../../services/Authenticator';


export const loginBusiness = async (
    email: string,
    password: string) => {

   let errorCode = 400

      if (!email || !password) {
         errorCode = 422
         throw new Error("Insira as informações corretamente (email, password)");
      }
      const userDataBase = new UserDataBase()
      const user = await userDataBase.findUserByEmail(email)

      if (!user) {
         errorCode = 409
         throw new Error("Email não cadastrado");
      }

      const hashManager = new HashManager();
      const checkPassword = await hashManager.compare(password, user.getPassword())

      if(!checkPassword){
        errorCode = 401
        throw new Error("Email ou senha incorretos");
      }
      
      const authenticator = new Authenticator();
      const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

   return token
}