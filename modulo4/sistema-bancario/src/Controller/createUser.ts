import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, cpf, dateOfBith } = req.body
    } catch (error) {

    }
}