import { BaseDataBase } from "../BaseDataBase";
import { tags } from "../table";
import { Tag } from "../../model/tags";

export class TagsDataBase extends BaseDataBase {

    public async createTag(tag: Tag): Promise<void> {

        try {
            await BaseDataBase.connection(tags)
                .insert({
                    productId: tag.getProductId(),
                    name: tag.getName()
                })
                                
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
}