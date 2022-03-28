import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users, Count } from './data';

const app = express()

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3004, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/test", (req: Request, res: Response) => {
    res.send("Teste funcionando")
})

//nao funciona
app.post('/users', (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const CPF = [req.body.CPF]
        const date = [req.body.date]

        if (!name || !CPF || !date) {
            throw new Error("Faltam informações no body");
        }
        if (name != "string" || CPF != ["string"] || date != ["string"]) {
            throw new Error("Informações do body inválidas");
        }

        for (let index = 0; index < users.length; index++) {
            if (users[index].CPF === CPF) {
                throw new Error("CPF já cadastrado");
            }
        }

        const newUser: Count = {
            id: Math.floor(Date.now() * Math.random()).toString(10),
            name,
            CPF,
            date,
            balance: 0,
        }
        users.push(newUser)
        res.send(users)

    } catch (error: any) {
        switch (error.message) {
            case "Faltam informações no body":
                res.status(400)
                break;
            case "Informações do body inválidas":
                res.status(400)
                break;
            case "CPF já cadastrado":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

app.get('/users', (req: Request, res: Response) => {
    try {
        res.send(users)
    } catch (error: any) {
        res.status(400).send("Usuários não encontrados")
    }
})

app.get('/users/balance/:CPF', (req: Request, res: Response) => {
    try {
        const CPF = [req.params.CPF]

        if (!CPF) {
            throw new Error("Falta o params CPF");
        }
        if (CPF != ["string"]) {
            throw new Error("CPF inválido");
        }
        let countFound = false
        const result = []

        for (let i = 0; i < users.length; i++) {
            if (users[i].CPF === CPF) {
                result.push({
                    id: users[i].id,
                    name: users[i].name,
                    balance: users[i].balance
                }
                )
                countFound = true
            }
            res.send(users)
        }

        } catch (error: any) {
            switch (error.message) {
                case "Falta o params CPF":
                    res.status(400)
                    break;
                case "CPF inválido":
                    res.status(400)
                    break;
                default:
                    res.status(500)
                    break;
            }
            res.send(error.message)
        }
    })