import Client from "./Client";
import Industry from "./Industry";


export default class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryRegister: number,
        public machinesQuantity: number,
        public cep: string
    ) {
        super(machinesQuantity, cep)
    }
    public getIndustryRegister(): number {
        return this.industryRegister
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + 100 * this.machinesQuantity
    }
}