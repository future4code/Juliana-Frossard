import Client from "./Client";
import Commerce from "./Commerce";



export default class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        public floorsQuantity: number,
        public cep: string
    ) {
        super(floorsQuantity, cep);
    }
    public getCNPJ(): string {
        return this.cnpj;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
}