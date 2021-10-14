//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
/*
1. O que o código abaixo está fazendo? 
Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
O let i=0 é o começo, a condição para acabar o looping é 
o i<5 e enquando nao for menor, vai incrementar i+i no console 
final
ou seja, vai tentar o 0<5, entao vai continuar rodando
vai tentar o 1<5, soma o 0 anterior (0+1) e torna a rodar
2<5, soma o (2+1-valor anterior) e torna a rodar
3<5, soma o (3+3-soma do valor anterior) e torna a rodar
4<5, soma o (4+6-soma do valor anterior) e tenta rodar mais uma vez
porem 5<5(isso é errado), entao o looping para e o console imprime
só o final, que é a soma das "tentativas", que seria 10
*/
/*
2. Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
a) O que vai ser impresso no console?
o começo pega cada numero da array guardada na constante lista for (let numero of lista)
a condição(if) é o numero ser maior do que 18
entao o programa vai olhar numero a numero da array e vai selecionar os maiores de 18
que serão impressos no console

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

*/
/*
3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
o começo é o let linha = "", a condição para parar o looping é quantidadeAtual < quantidadeTotal
lembrando que a quantidadeAtual=0 e a quantidadeTotal será inserida pelo usuario
enquanto nao atingir a condição, o programa vai rodar o 
let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++
ou seja, se o let asteriscos for menor que a quantidadeAtual+1, ele vai somar os asteriscos
tudo isso acima vai se chamar linha, que é onde ira colocar os *
o console vai imprimir os * de acordo com a condição acima
se o usuário colocar o numero 4
vai ficar  quantidadeAtual < quantidadeTotal
a quantidade atual por enquanto é 0 e a quantidadeTotal o usuario colocou 4
0<4, entao o programa vai rodar até isso ser verdade e vai passar para a proxima fase
let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++
asteriscos=0<quantidadeatual0+1 que no caso ficaria asteriscos =1
asteriscos++ seria 1+1, entao asteriscos seria 2
tudo isso foi chamado de linha
linha += "*" e foi atribuido o valor * para ela 
linha += "*" seria linha+ linha "*", que é 2+2=4 ou seja ****
rodando 4x (com o numero1,2,3,4)
* 
** 
***
****

*/

//EXERCICIOS DE ESCRITA DE CÓDIGO
//1.
 
// let quantDeBichinhosDeEstimação = Number(prompt("Quantos bichinhos de estimação você tem?"))
// if (quantDeBichinhosDeEstimação === 0){
//     console.log("Que pena! Você pode adotar um pet!")}
// let nomeBichinhos=[]
// for (let i = 0; i < quantDeBichinhosDeEstimação; i++){
// nomeBichinhos = prompt("Digite o nome do bichinho")

// console.log([nomeBichinhos])
// }

//2.
// const arrayOriginal= [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let i = 0
// const arrayPares =[]

// for (let numero of arrayOriginal){
//         console.log(numero)
//         console.log(numero/10)
//     if (numero % 2 ===0){
//         arrayPares.push(numero) }               
// i++
// }
// const resultado
// for (let i=0; i<arrayOriginal.length; i++){
// resultado.push( `O elemento do indice ${i} é ${arrayOriginal[i]}`)
// }

    
//DESAFIO
//1.
// let num1 = Number(prompt("escolha um numero jogador1"))
// let num2 = Number(prompt("escolha um numero jogador2"))
// while( num1!==num2 ){
//     let diferença
//     if(num2>num1){
//         diferença: "é menor"
//     }else{
//        diferença: "é maior"
//         }
//     console.log(`Errou, tente novamente com um numero ${diferença} `)
//     num1= Number(prompt("escolha outro numero jogador 1"))
//     num2= Number(prompt("escolha outro numerojogador 2"))    
//     }
//     if (num2===num1){
//         console.log("Acertou! Parabens")


// //2. 
// let num1 = Math.round(Math.random()*100)
// let num2 = Number(prompt("escolha um numero"))
// while( num1!==num2 ){
//     let diferença
//     if(num2>num1){
//         diferença: "é menor"
//     }else{
//        diferença: "é maior"
//         }
//     console.log(`Errou, tente novamente com um numero ${diferença} `)
//     num2= Number(prompt("escolha outro numero"))    
//     }
//     if (num2===num1){
//         console.log("Acertou! Parabens")
//     }