/*EXERCICIO DE INTERPRETAÇÃO
 1 - let resultado = bool1 && bool2
 console.log("a. ", resultado) 
 FALSE
 
 let resultado = bool1 && bool2 && bool3
 console.log("b. ", resultado)
 true && false && true
 false && true
 FALSE

 resultado = !resultado && (bool1||bool2)
 !resultado && (true || false)
 !resultado && (true)
 !false && true
 true && true
 TRUE

 console.log("d. ", typeof resultado)
 BOOLEANO

 2 - 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
console.log(soma)

Ele colocou duas strings, então o resultado será a concatenação
dos numeros acima e não a soma. O correto seria ele informar ao sistema
que é um numero (Number)

Ele poderia fazer desse jeito 

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

ou talvez assim
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number (primeiroNumero) + Number (segundoNumero)

console.log(soma)*/

/*EXERCICIO DE ESCRITA
let idadeUsuario = Number (prompt ("Digite sua idade"))
let idadeDoAmigo = Number (prompt ("Digite a idade do seu melhor amigo(a)"))
console.log ("Sua idade é maior do que a do seu amigo(a)?")
console.log (idadeUsuario > idadeDoAmigo)
console.log ("A diferença da sua idade é")
console.log (idadeUsuario-idadeDoAmigo)*/

/*2-
let numeroPar = Number (prompt ("Digite um número PAR"))
console.log ("Resto da divisão por 2")
console.log (numeroPar%2)
//todo número par dividido por 2 tem resto zero
//caso se insira um número impar o resto será 1, porque o resto da 
//divisão só pega o primeiro numero */

/* 3 -
let idadeAno = Number (prompt ("Qual é a sua idade?"))
let horaAno = 365*24
console.log ("Sua idade em meses é")
console.log (idadeAno*12)
console.log ("Sua idade em dias é")
console.log (idadeAno*365)
console.log ("Sua idade em horas é")
console.log (idadeAno*horaAno)*/

/* 4 -
let primeiroNumero = Number (prompt("Digite um número"))
 segundoNumero = Number (prompt("Digite um segundo número"))
 resto1 = (primeiroNumero%segundoNumero)
 resto2 = (segundoNumero%primeiroNumero)
console.log ("O primeiro numero é maior que segundo?")
console.log (primeiroNumero>segundoNumero)
console.log ("O primeiro numero é igual ao segundo?")
console.log (primeiroNumero===segundoNumero)
console.log ("O primeiro numero é divisível pelo segundo?")
console.log (resto1===0)
console.log ("O segundo numero é divisível pelo primeiro?")
console.log (resto2===0)*/

//DESAFIO


/* 1-
let temperaturaFahrenheit = 77
temperaturaCelsius = 80
temperaturaCelsius1 = Number(prompt("Escreva a temperatura em Celsius"))
temperaturaFahrenheit2 = temperaturaCelsius1*(9/5) + 32
console.log("Temperatura", temperaturaFahrenheit, "F° em Kelvin")
console.log((temperaturaFahrenheit- 32)*(5/9) + 273.15)
console.log("Temperatura", temperaturaCelsius, "C° em Fahrenheit")
console.log(temperaturaCelsius*(9/5) + 32)
console.log("Temperatura", temperaturaCelsius1, "C° em Fahrenheit")
console.log(temperaturaCelsius1*(9/5) + 32)
console.log("Temperatura", temperaturaCelsius1, "C° em Kelvin")
console.log((temperaturaFahrenheit2- 32)*(5/9) + 273.15)*/

/* 2-
let consumoQuilowatt = 280
valorQuilowatt = 0.05
valorFinal = (consumoQuilowatt*valorQuilowatt)
desconto = 15/100
console.log ("valor final com desconto")
console.log (valorFinal -(valorFinal*desconto))*/

//3 - 
let pesoLibra = 20
pesoKg = "X"
pesoLibraKg = pesoLibra/2.205
console.log ("20 libras equivalem a", pesoLibraKg ,"Kg")

let pesoOz = 10.5
pesoOzKg = pesoOz/35,274
console.log ("10.5 Oz equivalem a", pesoOzKg, "Kg")

let distanciaMi = 100
distanciaMiMetro = distanciaMi/0.000621371
console.log ("100 milhas equivale a", distanciaMiMetro,"Metro")

let distanciaFt = 50
distanciaFtMetro = distanciaFt/3.28084
console.log ("50 ft equivalem a", distanciaFtMetro, "Metro")

let medidaGalao = 103.56
medidaGalaoLitro = medidaGalao/0.264172
console.log("103.56 gal equivalem a",medidaGalaoLitro, "Litro")

let medidaXic = 450
medidaXicLitro = medidaXic/6
console.log ("450 xicaras equivalem a", medidaXicLitro, "Litros")


