import { HashManager } from '../../services/HashManager';
import { IdGenerator } from './../../services/IdGenerator';
import { Request, Response } from "express";
import { UserDataBase } from '../../data/user/UserDataBase';
import { User } from '../../model/user';
import { Authenticator } from '../../services/Authenticator';


export const signup = async (req: Request, res: Response) => {
   let errorCode = 400

   try {
      const { name, email, password, role } = req.body

      if (!name || !email || !password || !role) {
         errorCode = 422
         throw new Error("Insira as informações corretamente (name, email, password, role )");
      }
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

      res.status(200).send({message: 'Usuario criado com sucesso', token})
   } catch (error: any) {
      res.status(400).send(error.message)
   }
}