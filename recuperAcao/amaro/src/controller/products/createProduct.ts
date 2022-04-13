import { TagsDataBase } from './../../data/tags/TagsDataBase';
import { Product } from '../../model/products';
import { ProductsDataBase } from '../../data/products/ProductsDataBase';
import { Request, Response } from 'express';
import { IdGenerator } from '../../services/IdGenerator';
import { Tag } from '../../model/tags';


export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, tag } = req.body

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const newProduct = new Product(id, name)
        const productsDataBase = new ProductsDataBase()
        await productsDataBase.createProduct(newProduct)

        const newtag = new Tag(id, tag)
        const tagsDataBase = new TagsDataBase()
        await tagsDataBase.createTag(newtag)

        res.send('criado com sucesso')


    } catch (error: any) {
        res.status(400).send(error.message)
    }
}