export class Product {
    constructor(
        private id: string,
        private name: string,

    ) { }
    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }


    static productModel(data: any): Product {
        return new Product(
            data.id,
            data.name,
        )
    }
}