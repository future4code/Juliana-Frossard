//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, //0
		{canal: "Canal Brasil", horario: "19h"}, //1
		{canal: "Globo", horario: "14h"} //2
		]
}

console.log(filme.elenco[0]) // "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) //"Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) {canal: "Globo", horario: "14h"} 
```
a) O que vai ser impresso no console?*/
//Matheus Nachtergaele
//Virginia Cavendish
//{canal: "Globo", horario: "14h"


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //Juca ; 3; SRD
console.log(gato) //Juba ; 3 ;SRD
console.log(tartaruga) //Jubo ; 3; SRD
```

a) O que vai ser impresso no console?
console.log(cachorro)
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
console.log(gato)
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
console.log(tartaruga) 
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
os tres pontos copiam o objeto mencionado após eles, por exemplo ...cachorro
faz uma cópia de todo o objeto que esta descrito na const cachorrro
*/

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) 
//objeto-Caio, propriedade-false 
//return objeto[propriedade] --- return false

console.log(minhaFuncao(pessoa, "altura")) // indefinido, nao tem nada mencionando altura 
```

a) O que vai ser impresso no console?
console.log(minhaFuncao(pessoa, "backender")) - FALSE
console.log(minhaFuncao(pessoa, "altura")) - UNDEFINED

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
console.log(minhaFuncao(pessoa, "altura")) -- 
voltou undefined porque nao existe nada relacionado a altura
console.log(minhaFuncao(pessoa, "backender"))
voltou false porque a minha função, esta para return propriedade somente, no caso seria o backender
que é False
*/

//EXERCICIO DE ESCRITA DE CODIGO


    // const pessoa = {
    // nome: "Eduardo",
    // apelidos: ["Du", "Dudu", "Edu"],
    // }
    // const fraseCompleta = function(pessoa){
    //     const frase =(`Eu sou ${pessoa.nome}, mas pode me chamar de 
    //     ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
    //     return frase
    //  }
    
    // console.log(fraseCompleta(pessoa))
        
    //     const pessoaCopia = {
    // ...pessoa,
    // apelidos: ["Ed", "Dado", "Dudinha"],
    // }
    // console.log(fraseCompleta(pessoaCopia))
   

    // const dados = {
    //     nome: "Mariana",
    //     idade: 27,
    //     profissao: "Advogada"
    // }
    // function funcaoUsuario() {
    //     const resultado=[dados.nome, (dados.nome).length, dados.idade, dados.profissao, (dados.profissao).length]
    //     return resultado
    // }
    //  console.log(funcaoUsuario(dados))
     
    //  const dados2 = {
    //     nome: "Benjamin",
    //     idade: 2,
    //     profissao: "Estudante"
    // }
    // function funcaoUsuario2(){
    //     const resultado2=[dados2.nome, (dados2.nome).length, dados2.idade, dados2.profissao, (dados2.profissao).length]
    //     return resultado2
    // }
    // console.log(funcaoUsuario2(dados2))



// const carrinho =[]
// const frutas1={
//     nome: "banana",
//     disponibilidade: true
// }
// const frutas2={
//     nome: "maça",
//     disponibilidade: true
// }
// const frutas3={
//     nome: "kiwi",
//     disponibilidade: true
// }
// function comprarFrutas(fruta){
// carrinho.push(fruta)}

// comprarFrutas(frutas1)
// comprarFrutas(frutas2)
// comprarFrutas(frutas3)

//  console.log(carrinho)

//DESAFIO


// informacaoUsuario={

//     nome: prompt("Qual o seu nome?"),
//     idade: prompt("Qual é a sua idade?"),
//     profissao: prompt("Qual é a sua profissão?") 
//     }
    

// console.log(informacaoUsuario)



// function informacoesFilmes(){
//     const filmes = [
//         {
//             nome: "As tranças do rei careca",
//             lancamento: 2030
//         },
//         {
//             nome: "A volta de quem não foi",
//             lancamento: 2031
//             }]
//             return filmes, informacoesFilmes
//         }
//     console.log("O primeiro filme foi lançado antes do segundo?")
//     console.log((filmes.lancamento[0])<(filmes.lancamento[1]) )
//     console.log("O primeiro filme foi lançado no mesmo ano do segundo?")
//     console.log((filmes.lancamento[0])===(filmes.lancamento[1]) )