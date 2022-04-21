import { TagsDataBase } from '../data/tags/TagsDataBase';
import { Product } from '../model/products';
import { ProductsDataBase } from '../data/products/ProductsDataBase';
import { IdGenerator } from '../services/IdGenerator';

export const createProductsBusiness = async (
    name: string,
    tags: string[]) => {

    let errorCode = 400

    if (!name || !tags) {
        errorCode = 422
        throw new Error('Insira todos os dados(name e tag)')
    }

    const productsDataBase = new ProductsDataBase()

    const verifyName = await productsDataBase.findProductByName(name.toLocaleLowerCase())
    if (verifyName) {
        errorCode = 409
        throw new Error("Produto já cadastrado");
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()


    const newProduct = new Product(id, name.toLocaleLowerCase())
    const resultProduct = await productsDataBase.createProduct(newProduct)

    if (!resultProduct) {
        errorCode = 400
        throw new Error("Erro ao criar produto");
    }
    const tagDataBase = new TagsDataBase()

    tags.forEach(tag => {
        tagDataBase.createTag(newProduct, tag.toLocaleLowerCase())
    });

}