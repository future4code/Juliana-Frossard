import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users, User } from './data';


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

app.get('/users', (req: Request, res: Response) => {
    try {
        res.send(users)
    } catch (error: any) {
        res.status(400).send("Erro ao buscar produtos")
    }
}
)

app.get('/users/search/type/:type', (req: Request, res: Response) => {
    try {
        const searchType = req.params.type

        if (!searchType) {
            throw new Error("Falta o param type");

        }
        let userFound = false
        const result = []
        for (let i = 0; i < users.length; i++) {
            if (users[i].type.toUpperCase().includes(searchType.toUpperCase())) {
                result.push({
                    id: users[i].id,
                    name: users[i].name,
                    type: users[i].type
                }
                )
                userFound = true
            }
            if (!userFound) {
                throw new Error("TYPE não encontrado");
            }
        }
        res.send({
            result
        })

    } catch (error: any) {
        switch (error.message) {
            case "Falta ao param type":
                res.status(422)
                break;
            case "TYPE não encontrado":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

app.get('/users/search/name/:name', (req: Request, res: Response) => {
    try {
        const searchName = req.params.name

        if (!searchName) {
            throw new Error("Falta o param name");
        }
        let userFound = false

        const result = []

        for (let i = 0; i < users.length; i++) {
            if (users[i].name.toUpperCase().includes(searchName.toUpperCase())) {
                result.push({
                    id: users[i].id,
                    name: users[i].name,
                    email: users[i].email,
                    type: users[i].type,
                    age: users[i].age
                }
                )
                userFound = true
            }
            if (!userFound) {
                throw new Error("Usuário não encontrado");
            }
        }
        res.send({
            result
        })

    } catch (error: any) {
        switch (error.message) {
            case "Falta o param name":
                res.status(422)
                break;
            case "Usuário não encontrado":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

app.post('/users', (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const type = req.body.type
        const age = req.body.age
        
        if (!name || !email || !type || !age) {
            throw new Error("Faltam informações do body");
        }
        if (typeof name != "string" || typeof email != "string" || typeof age != "number" ) {
            throw new Error("Valores do body incorretos");
        }
        if (age <= 0) {
            throw new Error("Idade tem que ser maior do que zero");
        }

        const newUser:User = {
            id: Math.floor(Date.now()),
            name,
            email,
            type,
            age
        }
        users.push(newUser)
                
        res.send(users)

    } catch (error: any) {
        switch (error.message) {
            case "Faltam informações do body":
                res.status(400)
                break;
            case "Valores do body incorretos":
                res.status(400)
                break;
            case "Idade tem que ser maior do que zero":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})