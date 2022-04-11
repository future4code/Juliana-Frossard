export class Products {
    constructor(
        private id: string,
        private name: string,
        private tags: string[]

    ) { }
    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }
    static productModel(data: any): Products {
        return new Products(
            data.id,
            data.name,
            data.tags
        )
    }
}