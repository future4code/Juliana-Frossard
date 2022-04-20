import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { UpdateUser} from "./types";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
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

//criando usuário
app.put('/user', async (req: Request, res: Response): Promise<any> => {
    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if (!name || !nickname || !email) {
            throw new Error("Faltam dados name||nickname||email");
        }

        await connection("ToDoList")
            .insert({
                id: Math.floor(Date.now() * Math.random()).toString(20),
                name: name,
                nickname: nickname,
                email: email
            })
        res.status(200).send({ message: "Usuário Criado" });

    } catch (error: any) {
        switch (error.message) {
            case "Faltam dados name||nickname||email":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

//pegar usuario pelo ID

app.get('/user/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id

        if (!id) {
            throw new Error("Falta o params id");
        }
        const result = await connection("ToDoList")
            .select("id", "nickname")
            .where({ id: id })

        res.status(200).send(result)
    } catch (error: any) {
        switch (error.message) {
            case "Falta o params id":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

//editar usuário --não funciona
app.post('/user/edit/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const update: UpdateUser = {
             name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }
        if (!id) {
            throw new Error("Verifique o id");
        }
        if (!update) {
            throw new Error("Os dados do body nao podem ser nulos");
        }
        await connection("ToDoList")
            .update({
                update
            })
            .where({ id: id })
        res.send("Usuário alterado com sucesso")

    } catch (error: any) {
        switch (error.message) {
            case "Verifique o id":
                res.status(400)
                break;
            case "Os dados do body nao podem ser nulos":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

//criar uma tarefa
app.put('/task', async (req: Request, res: Response): Promise<any> => {
    try {
        const title = req.body.title
        const description = req.body.description
        const limitDate = req.body.limitDate
        const creatorUserId = req.body.creatorUserId

        if (!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Faltam dados title||description||limitDate||creatorUserId");
        }

        await connection("CreateTask")
            .insert({
                id: Math.floor(Date.now() * Math.random()).toString(20),
                title: title,
                description: description,
                limitDate: limitDate,
                creatorUserId: creatorUserId
            })
        res.status(200).send({ message: "Tarefa Criada" });

    } catch (error: any) {
        switch (error.message) {
            case "Faltam dados title||description||limitDate||creatorUserId":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

//pegar tarefa pelo id
app.get('/task/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        if (!id) {
            throw new Error("Falta o params ID");
        }
        const result = await connection("CreateTask")
            .select("*")
            .where({ id: id })

        res.status(200).send(result)
    } catch (error: any) {
        switch (error.message) {
            case "Falta o params ID":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
    }
})

//pegar todos os usuários - não funciona
app.get('/user/all', async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection("ToDoList")
            .select("id", "nickname")
        res.send({ users: [result] })
    } catch (error: any) {
        res.send(error.message)
    }
})

//deletar usuário
app.delete('/user/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        if (!id) {
            throw new Error("Params ID incorreto");
        }
        await connection('ToDoList')
            .delete()
            .where({ id: id })
    } catch (error: any) {
        res.send(error.message)
    }
})