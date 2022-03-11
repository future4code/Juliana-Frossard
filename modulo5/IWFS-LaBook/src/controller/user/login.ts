import { Request, Response } from "express";
import { loginBusiness } from '../../business/user/loginBusiness';


export const login = async (req: Request, res: Response) => {

   try {
      const { email, password } = req.body

      const token: string = await loginBusiness(email, password)

      res.status(200).send({ message: 'Usuario logado com sucesso', token })
   } catch (error: any) {
      res.status(400).send(error.message)
   }
}