import { IdGenerator } from './../services/idGenerator';
import { Request, Response } from "express";
import { hash } from "../services/hashManager";
import { UserDataBase } from '../data/UserDataBase';


const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body
        const hashpassword = await hash(password)

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error(
                "Preencha corretamente os campos: 'name,'email' e 'password"
            )
        }
        if (!email.includes('@') && !email.includes('.com')) {
            res.statusCode = 422;
            throw new Error("Formato de email invalido")
        }
        const userDataBase = new UserDataBase();
        const user = userDataBase.searchUserByEmail(email)
        if (user) {
            res.statusCode = 409
            throw new Error("Email ja cadastrado");

        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()




    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        }
    }
}

export default signUp;