import { Post } from "../../model/post";
import { BaseDataBase } from "../BaseDataBase";
import { postTable } from "../tables";

export class PostDataBase extends BaseDataBase{

    public async findPostById(id: string): Promise<Post> {
        try {
            const post = await BaseDataBase.connection(postTable)
                .select('*')
                .where({ id })
            return post[0] && Post.toPostModel(post[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    };
    public async createPost(post: Post): Promise<void> {
        try {
            await BaseDataBase.connection(postTable)
                .insert({
                    id: post.getId(),
                    userId: post.getUserId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    creationDate: post.getCreationDate(),
                    role: post.getRole()
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
    public async getAllPost(): Promise<Post[]> {
        try {
            const posts = await BaseDataBase.connection(postTable)
                .select('*')

            return posts.map((posts => Post.toPostModel(posts)))

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    };
}