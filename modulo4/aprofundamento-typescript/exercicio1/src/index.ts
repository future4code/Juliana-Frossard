//a)
const minhaString: string = "Hello"
// const minhaString:string = 12
//Ao tentar atribuir um número para a const de type string, 
//aparece um erro "number is not assignable to type string"

//b)
//const meuNumero: number = 2
//const meuNumero: number | string = "2"
type Valor = number | string
const meuNumero: Valor = "2"
//para que a const aceite mais de um type deve-se colocar o | ou o & //ou criar um type 

//c) e d)
enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

const Juliana: Pessoa = {
    nome: "Juliana",
    idade: 27,
    corFavorita: CorFavorita.AMARELO
}
const Benjamin: Pessoa = {
    nome: "Benjamin",
    idade: 2,
    corFavorita: CorFavorita.ANIL
}
const Evandro: Pessoa = {
    nome: "Evandro ",
    idade: 32,
    corFavorita: CorFavorita.VIOLETA
}