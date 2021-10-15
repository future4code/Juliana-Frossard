//Exercícios de interpretação de código
/* 1. O que vai ser impresso no console?

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})
vai ser impresso o item (nome e apelido), index que é a posição no array
e o array inteiro
exemplo
nome: "Amanda Rangel", apelido: "Mandi" [0]
array
{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
*/
/*2. O que vai ser impresso no console?

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
vai ser impresso o item.nome, somente o nome que esta na array
exemplo
Amanda Rangel
Laís Petra
Letícia Chijo
*/
/*3.O que vai ser impresso no console?

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
ele vai mostrar o item(nome e apelido), o index que é a posição 
que esta no array e o array completo modificado porem só ira aparecer
o que for diferente de "Chijo"
exemplo
{ nome: "Amanda Rangel", apelido: "Mandi" },[0]
  { nome: "Laís Petra", apelido: "Laura" },[1]
*/

//Exercícios de escrita de código
//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando 
//as funções de array map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//  //a) Crie um novo array que contenha apenas o nome dos doguinhos
// const separarNomes = (pet) =>{
//     return pet.nome
// }
// const nomePets = pets.map(separarNomes)
// console.log(nomePets)

// //b) Crie um novo array apenas com os cachorros salsicha

// const separarSalsicha =(pet) => {
//     if (pet.raca === "Salsicha") {
//         return true
//     }
// }
// const racaSalsicha = pets.filter(separarSalsicha)
// console.log(racaSalsicha)

// //c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// //A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const separarPoodle =(pet)=>{
//     if(pet.raca === "Poodle"){
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)
//         return true
//     }
// }
// const racaPoodle = pets.filter(separarPoodle)
// console.log(racaPoodle)


//2.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//   ]

 //a) Crie um novo array que contenha apenas o nome de cada item

//  const separarNomes = (produto)=>{
//      return produto.nome
//  }
//  const somenteNome = produtos.map(separarNomes)
//  console.log(somenteNome)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
 //aplicando 5% de desconto em todos eles
//FALTA COLOCAR O NOME DOS PRODUTOS

//  const separarPreco =(produto)=>{
//     return {nome: produto.nome, preco: produto.preco = (produto.preco)-produto.preco*5/100}
// }

// const novaArray = produtos.map(separarPreco)
// console.log(novaArray)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const separarBebidas =(produto)=>{
//     if (produto.categoria === "Bebidas"){
//         return true
//     }
// }
// const somenteBebidas = produtos.filter(separarBebidas)
// console.log(somenteBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const separarYpe = (produto)=>{
//     if ((produto.nome).includes("Ypê")){
//         return true
//     }
// }
// const somenteYpe = produtos.filter(separarYpe)
// console.log(somenteYpe)

//e) Crie um novo array onde cada item é uma frase 
//"Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


// const separarYpe = (produto)=>{
//     if ((produto.nome).includes("Ypê")){
//         console.log(`Compre ${produto.nome} por ${produto.preco}`)
//         return true
//     }
// }
// const somenteYpe = produtos.filter(separarYpe)
// console.log(somenteYpe)


//DESAFIOS
//1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

//  const colocarEmOrdemAlfabetica = (pokemon)=>{
//      return pokemon.nome
//  }
//  const ordemAlfabetica = pokemons.map(colocarEmOrdemAlfabetica)
// console.log(ordemAlfabetica.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
//nao roda como o esperado, ele separa as letras
// const tirarRepeticao = (pokemon) => {
// return [...new Set(pokemon.tipo)]
// }
// const semRepeticao = pokemons.map(tirarRepeticao)
// console.log(semRepeticao)