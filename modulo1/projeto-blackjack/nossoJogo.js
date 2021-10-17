/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Você aceita começar o jogo?")){
   return true
} else {
   console.log("O jogo acabou")
}
const nipes=["espada", "paus", "copas", "ouro"]
const valores=["2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K", "A"]

if (valores === "J"||valores === "Q"||valores === "K") {
   valor=10
 } else if (valores === "A")
 valor=10 

    const carta1Jogador1 = comprarCarta()
    const carta2Jogador1 = comprarCarta()
    const carta1Jogador2 = comprarCarta()
    const carta2Jogador2 = comprarCarta()

    const carta = { 
    texto: `${nipes}`,
    valor: `${valores}`
    }
    console.log(carta.texto) 
    console.log(carta.valor)

    


 
