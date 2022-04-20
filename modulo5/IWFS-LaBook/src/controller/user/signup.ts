import { Request, Response } from "express";
import { signupBusiness } from '../../business/user/signupBusiness';


export const signup = async (req: Request, res: Response) => {
   
   try {
      const { name, email, password, role } = req.body

      const token:string = await signupBusiness(name, email, password, role)

      res.status(201).send({message: 'Usuario criado com sucesso', token})

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}