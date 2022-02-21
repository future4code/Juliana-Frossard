import { IdGenerator } from '../services/IdGenerator';
import { TokenGenerator } from '../services/TokenGenerator'
import { Request, Response } from "express";
import connection from "../connection";
import { userType } from "../types";

const createUser = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400

   try {
      const user = 'User'
      const id: string = IdGenerator()

      const { email, password } = req.body

      if (!email || !password) {
         throw new Error('Todos os dados sao necessarios');
      }
      if (!email.includes('@') && !email.includes('.com')) {
         errorCode = 422;
         throw new Error("Formato de email inválido")
      }
      if (password.length < 6) {
         errorCode = 422;
         throw new Error('A senha tem que ter no minimo 6 caracteres');
      }
      const [exist] = await connection(user)
         .where({ email })
      if (exist) {
         errorCode = 409;
         throw new Error('Email já cadastrado');
      }
      const newUser: userType = { id, email, password }
      console.log(newUser)

      await connection(user)
         .insert({ newUser })

      const token = TokenGenerator({ id })
      console.log(token)

      res.status(201).send({ token })
   } catch (error: any) {
      res.status(errorCode).send(error.message || error.sqlMessage)
   }
}

export default createUser;