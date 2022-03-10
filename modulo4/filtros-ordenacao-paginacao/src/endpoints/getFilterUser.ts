import { connection } from './../data/connection';
import { Request, Response } from "express";
import selectAllUsers from '../select/selectAllUsers';


export const getFilterByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name
        const result = await connection('aula48_exercicio')
            .where('name', 'like', `%${name}%`)
        console.log(name)

    } catch (error: any) {
        res.send(error.message)
    }
}

export const getFilterByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type
        const result = await connection('aula48_exercicio')
            .where('type', 'like', `%${type}%`)
        console.log(type)

    } catch (error: any) {
        res.send(error.message)
    }
}

export const getOrderUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await selectAllUsers()
        let sort = req.query.sort as string;  //qual o campo sera ordenado
        let order = req.query.order as string //tipo de ordenaçao asc ou desc
        if (sort !=="name" && sort !== "created") {
            
        }
        const result = connection('aula48_exercicio')
            .orderBy(sort, order)

        res.status(200).send(users)
    } catch (error: any) {
        res.send(error.message)
    }
}