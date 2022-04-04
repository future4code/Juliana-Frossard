import Client from './Client';
import Industry from './Industry';
import Commerce from './Commerce';
import Residence from './Residence';
import ResidentialClient from './ResidentialClient';


const client: Client = {
    name: "Juliana",
    registrationNumber: 1,
    consumedEnergy: 500,

    calculateBill: () => {
        return 2;
    }
}
console.log(client)

const residenceTest = new Residence(2,"13561-180")
residenceTest.getCep()

const commerceTest = new Commerce(10, "13561-180")
commerceTest.getCep()

const industryTest = new Industry(5, "13569-003")
industryTest.getCep()

