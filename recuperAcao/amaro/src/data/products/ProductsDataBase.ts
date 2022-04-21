import { BaseDataBase } from "../BaseDataBase";
import { Product, ProductTag } from "../../model/products";
import { products } from "../table";

export class ProductsDataBase extends BaseDataBase {

    public async createProduct(product: Product): Promise<Product> {
        try {
            await this.getConnection()
                .insert({
                    id: product.getId(),
                    name: product.getName(),
                })
                .into(products)

            return product;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async findProductByName(name: string): Promise<any> {
        try {
            const result = await this.getConnection()
                .select('*')
                .from(products)
                .where({ name })

            return result[0];
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async searchProductById(id: string): Promise<any> {
        try {
            const product = await this.getConnection()
            .select('*')
            .from(products)
            .where({id})

            return product[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    


}