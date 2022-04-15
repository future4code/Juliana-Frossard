import { getProductByIdBusiness } from '../../business/getProductByIdBusiness';
import { Request, Response } from 'express';

export const getProductById = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.body

        const result = await getProductByIdBusiness(id)

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}