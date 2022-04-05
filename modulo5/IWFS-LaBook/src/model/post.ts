export enum POST_ROLES {
    NORMAL = 'NORMAL',
    EVENT = 'EVENT'
}
export interface AuthenticationDataPost {
    id: string,
    role?: POST_ROLES
 };

export class Post {

    constructor(
        private id: string,
        private userId: string,
        private photo: string,
        private description: string,
        private createdAt: any,
        private role?: POST_ROLES
    ) { }
    public getId() {
        return this.id
    }
    public getUserId() {
        return this.userId
    }
    public getPhoto() {
        return this.photo
    }
    public getDescription() {
        return this.description
    }
    public getCreatedAt() {
        return this.createdAt
    }
    public getRole() {
        return this.role
    }


    static toPostModel(data: any): Post {
        return new Post(
            data.id,
            data.userId,
            data.photo,
            data.description,
            data.createdAt,
            data.role)
    }
}
