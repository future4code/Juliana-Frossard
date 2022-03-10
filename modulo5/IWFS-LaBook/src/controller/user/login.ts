import { HashManager } from '../../services/HashManager';
import { Request, Response } from "express";
import { UserDataBase } from '../../data/user/UserDataBase';
import { Authenticator } from '../../services/Authenticator';


export const login = async (req: Request, res: Response) => {
   let errorCode = 400

   try {
      const { email, password} = req.body

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
      const checkPassword = hashManager.compare(password, user.getPassword())

      if(!checkPassword){
        errorCode = 401
        throw new Error("Email ou senha incorretos");
      }
      
      const authenticator = new Authenticator();
      const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

      res.status(200).send({message: 'Usuario logado com sucesso', token})
   } catch (error: any) {
      res.status(400).send(error.message)
   }
}