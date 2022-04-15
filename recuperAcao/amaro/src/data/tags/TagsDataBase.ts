import { BaseDataBase } from "../BaseDataBase";
import { tags } from "../table";
import { Product } from "../../model/products";

export class TagsDataBase extends BaseDataBase {

    public async createTag(product:Product, tag:string): Promise<Product> {

        try {
            await this.getConnection()
                .insert({
                    productId: product.getId(),
                    name: tag
                })
                .into(tags) 

                return product;           
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public async searchTagById(id: string): Promise<any>{
        try {
            const tag = await this.getConnection()
            .select('name')
            .from(tags)
            .where({productId: id})

            
            return tag
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        } 
    }
    public async searchTagByName(name: string): Promise<any>{
        try {
            const tag = await this.getConnection()
            .select('*')
            .from(tags)
            .where({name})

            return tag
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        } 
    }
    
}