import { compare } from './../services/HashGenerator'
import { Request, Response } from "express";
import { generateToken } from "../services/TokenGenerator";
import getUserByEmail from "./getUserByEmail";

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password")
        }
        if (!email.includes('@')) {
            res.statusCode = 422;
            throw new Error("Formato de email invalido")
        }
        const users = await getUserByEmail(email)
        const compareResult = await compare(password, users.password)
        if (!compareResult) {
            res.statusCode = 401;
            throw new Error("Invalid password");
        }
        const id = users.id
        const token = generateToken({ id:users.id, role:users.role })

        res.status(200).send({ token })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        }
    }
}

export default login;