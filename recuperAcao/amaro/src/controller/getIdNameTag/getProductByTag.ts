import { ProductsDataBase } from '../../data/products/ProductsDataBase';
import { TagsDataBase } from '../../data/tags/TagsDataBase';
import { getProductByDataBusiness } from '../../business/getProductByDataBusiness';
import { Request, Response } from 'express';
import { ProductTag } from '../../model/products';

export const getProductByTag = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name } = req.body

        if (!name) {
            errorCode = 409
            throw new Error("Preenche corretamente");
        }
        const tagDataBase = new TagsDataBase()
        const productsDataBase = new ProductsDataBase()

        const tag = await tagDataBase.searchTagByName(name)
        if (!tag) {
            errorCode = 400
            throw new Error("Produto não encontrado");
        }
        console.log(tag.id)
        const product = await productsDataBase.searchProductById(tag.id)
        if (!product) {
            errorCode = 400
            throw new Error("Produto não encontrado");
        }

        const productTag: ProductTag =
        {
            product: product,
            tag: tag.name
        }
        res.status(200).send(productTag)


    } catch (error: any) {
        res.status(400).send(error.message)
    }
}