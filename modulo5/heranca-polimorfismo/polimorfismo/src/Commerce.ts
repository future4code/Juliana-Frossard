import Place from "./Place";


export default class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,

        cep: string
    ) {
        super(cep);
    };
    
    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
};