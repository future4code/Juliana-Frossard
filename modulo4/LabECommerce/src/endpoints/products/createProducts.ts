import { Request, Response } from 'express';
import connection from '../../connection';
import { Products } from '../../types/Products';

export const createProducts = async (
    req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, img_url } = req.body

        const result: Products = await connection('labecommerce_products')
            .insert({
                id: Math.floor(Date.now() * Math.random()),
                name,
                price,
                img_url
            })
        res.status(201).send('Created')
    } catch (error) {
        res.status(500).end
    }
}

export default createProducts;