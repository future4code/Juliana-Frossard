import { ProductTag } from './../model/products';
import { TagsDataBase } from './../data/tags/TagsDataBase';
import { ProductsDataBase } from './../data/products/ProductsDataBase';

export const getProductByIdBusiness = async (
    id: string) => {
    let errorCode = 400
    if (!id) {
        errorCode = 422
        throw new Error("Preencha o parâmetro { id } corretamente");
    }
    const productDataBase = new ProductsDataBase()
    const tagDataBase = new TagsDataBase()

    const product = await productDataBase.searchProductById(id)

    if (!product) {
        errorCode = 400
        throw new Error("Parâmetro id incorreto ou inexistente");
    }

    const tag = await tagDataBase.searchTagById(id)
    if (!tag) {
        errorCode = 400
        throw new Error("Parâmetro id incorreto ou inexistente");
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