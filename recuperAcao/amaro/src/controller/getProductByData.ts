import { getProductByDataBusiness } from './../business/getProductByDataBusiness';
import { Request, Response } from 'express';

export const getProductByData = async (req: Request, res: Response) => {

    try {
        const { id, name, tag } = req.body

        const result = await getProductByDataBusiness(id, name, tag)

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}