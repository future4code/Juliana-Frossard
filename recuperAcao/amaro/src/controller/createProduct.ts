import { createProductsBusiness } from '../business/createProductsBusiness';
import { Request, Response } from 'express';

export const createProduct = async (req: Request, res: Response) => {

    try {
        const { name, tags }: { name: string, tags: string[] } = req.body

        await createProductsBusiness(name, tags)

         res.status(201).send({ message: 'Produto criado com sucesso' })

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}