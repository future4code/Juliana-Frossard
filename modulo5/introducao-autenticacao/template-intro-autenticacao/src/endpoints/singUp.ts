import { Request, Response } from "express";
import connection from "../data/connection";
import { user } from '../data/tables';
import { createUser } from './createUser';
import { IdGenarator } from "../services/IdGenerador";
import { generateToken } from '../services/TokenGenerator';

const singUp = async (req: Request, res: Response): Promise<void> => {

   try {

      const { email, password } = req.body
      const id = IdGenarator()

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }
      if (!email.includes('@')) {
         res.statusCode = 422;
         throw new Error("Formato de email invalido")
      }
      if (password.length < 6) {
         res.statusCode = 422;
         throw new Error('A senha tem que ter no minimo 6 caracteres');
      }

      const [users] = await connection(user)
         .where({ email })

      if (users) {
         res.statusCode = 409
         throw new Error('Email ja cadastrado')
      }
      await createUser(id, email, password)

      const token = generateToken({ id })
      res.status(201).send({ token })

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message || error.Sqlmessage})
      }
   }
}

export default singUp;