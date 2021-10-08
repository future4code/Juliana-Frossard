// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 const alturaUsuario = prompt ("Digita uma altura")
 const larguraUsuario =  prompt ("Digita uma largura")
 console.log(alturaUsuario*larguraUsuario)
  }

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = prompt ("Qual o ano atual")
const anoUsuario = prompt ("QUal o ano que nasceu")

console.log(anoAtual-anoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const resultado = peso/(altura*altura)
return resultado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt ("Digite seu nome")
  const idadeUsuario = prompt("Digite sua idade")
  const emailUsuario = prompt("Digite seu email")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
  }

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1= prompt("Cor favorita 1")
  const cor2= prompt("Cor favorita 2")
  const cor3= prompt("Cor favorita 3")
  const coresFavoritas = [cor1, cor2,cor3]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 const stringMaiscula= string.toUpperCase()
 return stringMaiscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

return string1.lenght===string2.lenght
}
//nao achei o erro

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
   return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiroNumero=array[0]
array[0]= array[array.length - 1]
array[array.length - 1]=primeiroNumero
return array
}

 // EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2)
{
  return (string1.toLowerCase() === string2.toLowerCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
   const anoAtual = Number(prompt("ano atual"))
   const anoNascimento = Number(prompt("ano nascimento"))
   const anoCarteiradeIdentidade = Number(prompt("ano de emissao da carteira de identidade"))
   //anoatual-anonascimento=idade &&
   //anoatual-anocarteiradeidentidade ||
   const resultado1=anoAtual-anoNascimento<=20 && anoAtual-anoCarteiradeIdentidade>=5
   const resultado2=anoAtual-anoNascimento>20<=50 && anoAtual-anoCarteiradeIdentidade>=10
   const resultado3=anoAtual-anoNascimento>50 && anoAtual-anoCarteiradeIdentidade>=15
   //nao achei o erro no resultado3
   console.log(resultado1 || resultado2 || resultado3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

const idadeUsuario = prompt("Você tem mais de 18 anos?")
const ensinoUsuario =prompt("Você possui ensino médio completo?")
const disponibilidadeUsuario= prompt ("Você possui disponibilidade exclusiva durante os horários do curso?")
const resultado1 = idadeUsuario === ("sim")
const resultado2 = ensinoUsuario === ("sim")
const resultado3 = disponibilidadeUsuario === ("sim")

console.log (resultado1 && resultado2 && resultado3)
}