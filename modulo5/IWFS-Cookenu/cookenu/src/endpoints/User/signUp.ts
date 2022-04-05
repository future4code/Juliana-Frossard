import { Request, Response } from "express";
import createUser from "../helps/createUser";
import getUserByEmail from "../helps/getUserByEmail";
import generateToken from "../../services/generateToken";
import { hash } from "../../services/hashManager";
import { IdGenarator } from "../../services/idGenerator";

const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;
        const id = IdGenarator();
        const hashpassword = await hash(password);

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Insira todos os campos('name', 'email' e 'password')");
        };
        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido");
        };
        if (password < 6) {
            res.statusCode = 422;
            throw new Error("A senha tem que apresentar no minimo 6 caracteres");
        };

        const userEmail = await getUserByEmail(email)

        if (userEmail) {
            res.statusCode = 409
            throw new Error('Email ja cadastrado')
        }

        await createUser(id, name, email, hashpassword)

        const token = generateToken({ id })
        res.status(201).send({ token })

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message || error.Sqlmessage })
        }
    }
}

export default signUp;