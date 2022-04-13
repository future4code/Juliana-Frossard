export class Tag {

    constructor(
        private productId: string,
        private name: string[]
    ) { }

    public getName = () => {
        return this.name
    }
    public getProductId = () => {
        return this.productId
    }
    static tagModel(data: any): Tag {
        return new Tag(
            data.id,
            data.name
        )
    }
}