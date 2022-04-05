import { Request, Response } from "express";
import generateToken from "../../services/generateToken";
import { compare } from "../../services/hashManager";
import getUserByEmail from "../helps/getUserByEmail";

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Insira todos os campos('email' e 'password')")
        }
        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido");
        };
        if (password < 6) {
            res.statusCode = 422;
            throw new Error("A senha tem que apresentar no minimo 6 caracteres");
        };

        const user = await getUserByEmail(email)

        if (!user) {
            res.statusCode = 400
            throw new Error("Usuário não existe");
        };
        const compareResult = await compare(password, user.password)
        if(!compareResult){
            res.statusCode = 401
            throw new Error("Senha incorreta");
        };

        const userId = user.id
        const token = generateToken({id: user.id})

        res.status(201).send({ message: 'access_token', token })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        };
    }

}

export default login;