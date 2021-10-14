//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
/* 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
/*a)O codigo verifica se o numero é par ou nao, porque o resto da divisao do numero por
dois tem que ser zero para ele passar no teste.
b)numeros pares
c)numeros impares*/


/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
    
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)Pêra
a)o codigo serve para mostrar o valor das frutas vendidas
b)O preço da fruta Maça, é R$ 2.25
c) O preço da fruta Pêra, é R$ 5
contaria o preço do default pois nao ficaria especificado como condição e entraria nos demais, 
ou seja o que nao for Laranja, Maça ou Uva é 5 reais
*/

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a)a primeira linha pede para o usuario digitar um numero, e está condicionando atraves do number
que seja só numeros, nao aceitando strings
b) se o numero for 10, vai receber a mensagem -- Esse número passou no teste --
porque a condição é que ele seja maior do que zero
se o numero for -10 nao vai aparecer nada porque nao esta espeficicado a condição para 
numero menor do que zero
c)o let está perdido ali, talvez se trocasse por um else para fechar a comparação ficaria certo
*/

//EXERCICIO DE ESCRITA DE CÓDIGO
//1
// const maiorDeIdade = Number(prompt("Qual é a sua idade?"))
// const respostaUsuario = maiorDeIdade
// if (respostaUsuario>=18){
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir")
// }

//2
// const turnoAluno = prompt("Digite seu turno M/V/N").toUpperCase()
// const respostaAluno = turnoAluno
// if (respostaAluno==="M"){
//     console.log("Bom dia!")
// } else if (respostaAluno==="V"){
//     console.log("Boa Tarde!")
// } else if (respostaAluno==="N"){
//     console.log("Boa Noite!")
// }

// const turnoAluno = prompt("Digite seu turno M/V/N").toUpperCase()
// const respostaAluno = turnoAluno
// switch (respostaAluno){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Não é um turno válido")
// }

//3
// const generoFilme=prompt("Escolha um genero de filme")
// const valorIngreco=Number(prompt("Qual o valor do ingresso?"))
// if (generoFilme==="fantasia"&& valorIngreco<=15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :( ")
// }

//DESAFIOS
// 1
// const generoFilme=prompt("Escolha um genero de filme").toLocaleLowerCase()
// const valorIngreco=Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme==="fantasia" && valorIngreco<=15){
//     const lanchinho=prompt("Escolha um lanche para acompanhar")
//     console.log(`Bom filme! Aproveite o(a) seu(sua) ${lanchinho}`)
// } else{
//     console.log("Escolha outro filme :(")
// }

// //2
// const nomeCOmpleto = prompt ("Digite o nome completo")
// const tipoDeJogo = prompt ("Digite o tipo de jogo: IN(internacional) ou DO(domestico").toUpperCase()
// const etapaDoJogo = prompt ("Digite a etapa do jogo SF(semi-final), DT(decisão do terceiro lugar, FI(final").toUpperCase()
// const categoria = Number(prompt ("Digite a categoria 1, 2, 3 ou 4"))
// const quantidadeDeIngressos = prompt ("Digite a quantidade de ingressos")

// //valor final DO-SF
// const valorFinalIngressoDoSf1 = quantidadeDeIngressos*1320
// const valorFinalIngressoDoSf2 = quantidadeDeIngressos*880
// const valorFinalIngressoDoSf3 = quantidadeDeIngressos*550
// const valorFinalIngressoDoSf4 = quantidadeDeIngressos*220
// //valor final DO-DT
// const valorFinalIngressoDoDt1 = quantidadeDeIngressos*660
// const valorFinalIngressoDoDt2 = quantidadeDeIngressos*440
// const valorFinalIngressoDoDt3 = quantidadeDeIngressos*330
// const valorFinalIngressoDoDt4 = quantidadeDeIngressos*170
// //valor final DO-FI
// const valorFinalIngressoDoFi1 = quantidadeDeIngressos*1980
// const valorFinalIngressoDoFi2 = quantidadeDeIngressos*1320
// const valorFinalIngressoDoFi3 = quantidadeDeIngressos*880
// const valorFinalIngressoDoFi4 = quantidadeDeIngressos*330
// //valor final IN-SF
// const valorFinalIngressoInSf1 = valorFinalIngressoDoSf1*4.10
// const valorFinalIngressoInSf2 = valorFinalIngressoDoSf2*4.10
// const valorFinalIngressoInSf3 = valorFinalIngressoDoSf3*4.10
// const valorFinalIngressoInSf4 = valorFinalIngressoDoSf4*4.10
// //valor final IN-DT
// const valorFinalIngressoInDt1 = valorFinalIngressoDoDt1*4.10
// const valorFinalIngressoInDt2 = valorFinalIngressoDoDt2*4.10
// const valorFinalIngressoInDt3 = valorFinalIngressoDoDt3*4.10
// //valor final IN-FI
// const valorFinalIngressoInFi1 = valorFinalIngressoDoFi1*4.10
// const valorFinalIngressoInFi2 = valorFinalIngressoDoFi2*4.10
// const valorFinalIngressoInFi3 = valorFinalIngressoDoFi3*4.10
// const valorFinalIngressoInFi4 = valorFinalIngressoDoFi4*4.10


// //DO - SF
// if (tipoDeJogo==="DO" && etapaDoJogo==="SF" && categoria===1){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 1320,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoSf1}`)
//     }else if(tipoDeJogo==="DO" && etapaDoJogo==="SF" && categoria===2){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 880,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoSf2}`)
//     }else if(tipoDeJogo==="DO" && etapaDoJogo==="SF" && categoria===3){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 550,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoSf3}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="SF" && categoria===4){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 220,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoSf4}`)

// //DO - DT
//     }else if(tipoDeJogo==="DO" && etapaDoJogo==="DT" && categoria===1){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 660,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoDt1}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="DT" && categoria===2){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 440,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoDt2}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="DT" && categoria===3){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 330,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoDt3}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="DT" && categoria===4){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 170,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoDt4}`)

// //DO-FI
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="FI" && categoria===1){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 1980,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoFi1}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="FI" && categoria===2){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 1320,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoFi2}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="FI" && categoria===3){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 880,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoFi3}`)
//     }else if (tipoDeJogo==="DO" && etapaDoJogo==="FI" && categoria===4){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 330,00
// Valor Final do ingresso: R$ ${valorFinalIngressoDoFi4}`)

// //IN-SF
//     }else if(tipoDeJogo==="IN" && etapaDoJogo==="SF" && categoria===1){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 5412,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInSf1}`)
//     }else if(tipoDeJogo==="IN" && etapaDoJogo==="SF" && categoria===2){
//         console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 3608,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInSf2}`)
//     }else if(tipoDeJogo==="IN" && etapaDoJogo==="SF" && categoria===3){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 2255,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInSf3}`)
//     }else if(tipoDeJogo==="IN" && etapaDoJogo==="SF" && categoria===4){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 902,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInSf4}`)

// //IN-DT    
//    }else if(tipoDeJogo==="IN" && etapaDoJogo==="DT" && categoria===1){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 2706,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInDt1}`)
//    }else if(tipoDeJogo==="IN" && etapaDoJogo==="DT" && categoria===2){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 1804,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInDt2}`)
//     }else if(tipoDeJogo==="IN" && etapaDoJogo==="DT" && categoria===3){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 1353,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInDt3}`)
//    }else if(tipoDeJogo==="IN" && etapaDoJogo==="DT" && categoria===4){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 697,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInDt4}`)
// //IN - FI
//    }else if(tipoDeJogo==="IN" && etapaDoJogo==="FI" && categoria===1){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 8118,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInFi1}`)
//    }else if(tipoDeJogo==="IN" && etapaDoJogo==="FI" && categoria===2){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 5412,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInFi2}`)
//   }else if(tipoDeJogo==="IN" && etapaDoJogo==="FI" && categoria===3){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 3608,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInFi3}`)
//    }else if(tipoDeJogo==="IN" && etapaDoJogo==="FI" && categoria===4){
//     console.log(`--- Dados da compra ---
// Nome do Cliente:, ${nomeCOmpleto},
// Tipo de Jogo:, ${tipoDeJogo},
// Etapa de jogo:, ${etapaDoJogo},
// Categoria: ${categoria},
// --- Valores --- 
// Valor do ingresso: R$ 1353,00 
// Valor Final do ingresso: R$ ${valorFinalIngressoInFi4}`)
//    }else{
//        console.log("Informação inválida")
//}