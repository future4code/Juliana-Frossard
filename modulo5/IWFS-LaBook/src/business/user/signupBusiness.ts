import { HashManager } from '../../services/HashManager';
import { IdGenerator } from './../../services/IdGenerator';
import { UserDataBase } from '../../data/user/UserDataBase';
import { User, USER_ROLES } from '../../model/user';
import { Authenticator } from '../../services/Authenticator';


export const signupBusiness = async (
    name:string, 
    email:string, 
    password: string, 
    role: USER_ROLES) => {

   let errorCode = 400

   if (!name || !email || !password || !role) {
         errorCode = 422
         throw new Error("Insira as informações corretamente (name, email, password, role )");
      };
      if (!email.includes('@') && !email.includes('.com')) {
         errorCode = 422;
         throw new Error("Formato de email inválido");
     };
      const userDataBase = new UserDataBase()
      const user = await userDataBase.findUserByEmail(email)

      if (user) {
         errorCode = 409
         throw new Error("Email ja cadastrado ");
      }

      const idGenerator = new IdGenerator()
      const id = idGenerator.generate()

      const hashManager = new HashManager();
      const hashpassword = await hashManager.hash(password)

      const newUser = new User(id, name, email, hashpassword, role)

      await userDataBase.createUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generate({ id, role })

    return token
}