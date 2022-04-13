import { BaseDataBase } from "../BaseDataBase";
import { Product } from "../../model/products";
import { products } from "../table";

export class ProductsDataBase extends BaseDataBase {

    public async createProduct(product: Product): Promise<void> {
        try {
            await BaseDataBase.connection(products)
                .insert({
                    id: product.getId(),
                    name: product.getName(),
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async findProductbyData(data: string): Promise<Product> {
        try {
            const result = await BaseDataBase.connection(products)
                .select('*')
                .where({ id: data } || { name: data })
            return result[0] && Product.productModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}