import { generateToken } from './../services/authenticator';
import { User } from './../entities/User';
import { Request, Response } from "express";

import { UserDataBase } from '../data/UserDataBase';
import { HashManager } from '../services/hashManager';
import { IdGenarator } from '../services/idGenerator';


const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body
        const id = IdGenarator()

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
        if (password.length < 6) {
            res.statusCode = 422;
            throw new Error('A senha tem que ter no minimo 6 caracteres');
        }

        const userDataBase = new UserDataBase();
        const user = await userDataBase.searchUserByEmail(email);
        if (user) {
            res.statusCode = 409
            throw new Error("Email ja cadastrado");
        }


        const hashMenager = new HashManager()
        const hashpassword = await hashMenager.hash(password)

        const newUser = new User(id, name, email, hashpassword)
        await userDataBase.createUser(newUser);

        const token = generateToken({ id })
        res.status(201).send({ message: 'access_token', token })


    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || error.Sqlmessage })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        }
    }
}

export default signUp;