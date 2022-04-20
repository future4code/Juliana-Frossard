class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
        
    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password

    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
    public introduceYourself(): string {
        return `Olá, sou ${this.getName()}. Bom dia!`
     }

}

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const userJuliana = new User("1a", "ju.frossard@email.com", "Juliana", "jl_lL!@n@")
// console.log(userJuliana)
// userJuliana.getId;
// userJuliana.getName;
// userJuliana.getEmail;
// userJuliana.introduceYourself;

//1-
//a) Não é possível imprimir a senha pois ela está privada
//b)uma vez

const customerJuliana = new Customer(
    "1b", "ju.frossard@email.com", "Juliana", "jl_lL!@n@", "1234")

// console.log(customerJuliana)
// customerJuliana.getId;
// customerJuliana.getName;
// customerJuliana.getName;
// customerJuliana.getCreditCard;

//2-
//a)Foi chamado uma vez
//b)duas vezes, por conta do userJuliana que chamou a primeira vez e depois o customerJuliana
//chamou a segunda vez, por que a class Customer tem como extensao a classe User  

//3-a)sim, a senha está sendo impressa
//4 - 

console.log(customerJuliana.introduceYourself())

//5 -  `Olá, sou ${this.getName()}. Bom dia!`
