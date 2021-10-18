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
const maiorNumero = Math.max(num1, num2)
if (maiorNumero/!maiorNumero === 0){
    return true
}
const diferença = maiorNumero - !maiorNumero
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) 
{}