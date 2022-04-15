export class Tag {

    constructor(
        private userId: string,
        private name: string
    ) { }
    public getUserId() {
        return this.userId
    }

    public getName() {
        return this.name
    }


    static toPostModel(data: any): Tag {
        return new Tag(
            data.userId,
            data.name)
    }
}