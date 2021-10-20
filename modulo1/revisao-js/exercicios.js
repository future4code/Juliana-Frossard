// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
//Escreva uma função que recebe um array como 
//parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray[1,2,3,4,5]
// EXERCÍCIO 02
//Escreva uma função que recebe um array como 
//parâmetro e retorne este array invertido.
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido[8, 23, 16, 10]

// EXERCÍCIO 03
//Escreva uma função que recebe um array de números 
//e retorne o array com os números em ordem crescente.
function retornaArrayOrdenado(array) {
 return array.sort((a, b) => a - b)
}
retornaArrayOrdenado[3, 2, 1, 4, 7]

// EXERCÍCIO 04
//Escreva uma função que receba um array de números e 
//retorne um novo array com apenas os números pares desse array de entrada.

const arrayPares = []
function retornaNumerosPares(array) {
  
}
// EXERCÍCIO 05
//Escreva uma função que recebe um array de números e 
//retorna um array com os números pares elevados a 2.
 function retornaNumerosParesElevadosADois(array) {
     let 
 }

// EXERCÍCIO 06
//Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i=0; i < array.length; i++){
        if (array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
  return maiorNumero
}
console.log(retornaMaiorNumero)

// EXERCÍCIO 07
//Escreva uma função que, dados dois números, 
//retorne um objeto com as seguintes propriedades:
// `maiorNumero` → contém o maior número
// `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
// `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1>num2){
        maior=num1
        menor= num2
    }else if (num1<num2) {
        maior=num2
        menor=num1       
    }}
        let objeto = {
    maiorNumero = maior,
    maiorDivisivelPorMenor = maior % menor === 0,
    diferenca = maior-menor
            }  
console.log(`Maior Numero ${maiorNumero}, maiorDivisivelPorMenor ${maiorDivisivelPorMenor }, diferenca ${diferenca} `)


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
    return equilatero
} else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
    return isoceles
} else if (ladoA !==ladoB && ladoB!== ladoC && ladoC!==ladoA){
    return escaleno
} }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let menorNUm= Math.min(...array)
    let maiorNUm= Math.max(...array)
    const index= array.splice(array.indexOf(maiorNUm))
    const index2= array.splice(array.indexOf(menorNUm))
    console.log(index, index2)
    let menorNUm= Math.min(...array)
    let maiorNUm= Math.max(...array)
}
console.log(menorNUm, maiorNUm)
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 const filmes ={
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}  
 return `Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por${filmes.atores}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const usuario ={
   nome: "Astrodev",
   idade: 25,
   email: "astrodev@labenu.com.br",
   endereco: "Rua do Futuro, 4"
} 
return {...usuario, nome: "anonimo"}
}

// EXERCÍCIO 13A
const pessoasNaFila=[
    { nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}]
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = 60 <pessoas.idade>14 && pessoas.altura>1.50 
    return pessoasAutorizadas
}
const autorizados = pessoasNaFila.filter(retornaPessoasAutorizadas)
console.log(pessoasAutorizadas)

// EXERCÍCIO 13B
const pessoasNaFila=[
    { nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}]
function retornaPessoasNaoAutorizadas(pessoas) {
  const retornaPessoasNaoAutorizadas = 60 >pessoas.idade<14 && pessoas.altura<1.50
  return retornaPessoasNaoAutorizadas
}
const naoAutorizados = pessoasNaFila.filter(retornaPessoasNaoAutorizadas)
console.log(naoAutorizados)

// EXERCÍCIO 14
const array = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

function retornaContasComSaldoAtualizado(contas) {
    const novoSaldo = 0
    for (let index = 0; index < array.length; index++) {
        soma+= array[i]
        return novoSaldo
    }
console.log(novoSaldo)
}

// EXERCÍCIO 15A
const array = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ]
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const consultas = sort(array.nome)
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) 
{}

