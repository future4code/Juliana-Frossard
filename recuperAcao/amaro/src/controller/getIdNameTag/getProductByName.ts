import { ProductsDataBase } from '../../data/products/ProductsDataBase';
import { Request, Response } from 'express';
import { TagsDataBase } from '../../data/tags/TagsDataBase';

export const getProductByName = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name } = req.body
        if(!name) {
            errorCode = 409
            throw new Error("Preencha o parâmetrocorretamente");
        }

        const productDataBase = new ProductsDataBase()
        const tagDataBase = new TagsDataBase()

        const product = await productDataBase.findProductByName(name)
        if (!product) {
            errorCode = 422
            throw new Error("Produto não encontrado");
        }
        res.send(product)

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}