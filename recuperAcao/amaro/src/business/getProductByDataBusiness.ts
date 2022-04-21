import { TagsDataBase } from './../data/tags/TagsDataBase';
import { ProductsDataBase } from './../data/products/ProductsDataBase';
import { Request, Response } from 'express';
import { ProductTag } from '../model/products';

export const getProductByDataBusiness = async (
    id: string,
    name: string,
    tag: string) => {

    let errorCode = 400

    const productDataBase = new ProductsDataBase()
    const tagDataBase = new TagsDataBase()


    if (!id && !name && !tag) {
        errorCode = 422
        throw new Error("Insira os dados corretamente");
    }

    if (!!id && !name && !tag) {
        const product = await productDataBase.searchProductById(id)

        if (!product) {
            errorCode = 400
            throw new Error("Produto não encontrado");
        }

        const tag = await tagDataBase.searchTagById(id)
        if (!tag) {
            errorCode = 400
            throw new Error("Produto não encontrado");
        }

        const resultTag = tag.map((item: any) => {
            return item.name
        })
        const productTag: ProductTag =
        {
            product: product,
            tag: resultTag
        }

        return productTag

    }

    if (!id && !!name && !tag) {
        const product = await productDataBase.findProductByName(name)
        if (!product) {
            errorCode = 422
            throw new Error("Produto não encontrado");
        }

    }
    if (!id && !name && !!tag) {
        const tag = await tagDataBase.searchTagByName(name)
        if (!tag) {
            errorCode = 409
            throw new Error("Produto não encontrado");
        }
        const resultTag = tag.map((item: any) => {
            return item.id
        })
        const resultNameTag = tag.map((item: any) => {
            return item.name
        })

        const product = await productDataBase.searchProductById(resultTag)

        if (!product) {
            errorCode = 400
            throw new Error("Produto não encontrado");
        }
        const productTag: ProductTag =
        {
            product: product,
            tag: resultNameTag
        }
        return productTag;
    }
}
