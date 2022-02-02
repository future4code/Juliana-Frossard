import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("001"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


const search = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}
const quantity = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}";`)
    return result;
}
app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const actorSalary = req.body.salary
        const iD = req.params.id

        await connection("Actor")
            .update({
                salary: actorSalary
            })
            .where({ id: iD });

        res.status(200).send({ message: "Ator atualizado" });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

const updateSalary = async (id: string, salary: number): Promise<any> => {
    const result = await connection.raw(`
    UPDATE Actor SET salary = ${salary} 
    WHERE id=${id};`)
    return result;
}

app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const iD = req.params.id

        await connection("Actor")
            .delete()
            .where({ id: iD });

        res.status(200).send({ message: "ator deletado" });
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

const deleteActor = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    DELETE FROM Actor WHERE id=${id};`)
    return result;
}
app.get('/actor/salary/:gender', async (req: Request, res: Response): Promise<any> => {
    try {
        const gender = req.params.gender

        await connection("Actor")
            .avg()
            .where({ gender: gender })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const avrSalaryGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT AVG(salary) 
    FROM Actor WHERE gender = ${gender};
`)
    return result;
}


app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});