import { Request, Response } from 'express';
import connection from '../../connection';
import { Products } from '../../types/Products';


export const getAllProducts = async (
    req: Request, res: Response): Promise<void> => {
    try {
        const products:Products[] = await connection('labecommerce_products')

        res.status(200).send(products)
    } catch (error) {
        res.status(500).end
    }
}

export default getAllProducts;