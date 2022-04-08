//a) entra um array de numeros, e sai a relação do maior, menor numero e a media dos numeros do array
//b)
// function obterEstatisticas(numeros:number[]) {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
//c)
type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) =>{}
}
const amostraDeIdades:AmostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros:number[]) => {

        const numerosOrdenados = numeros.sort(
            (a, b) => a - b
        )
    
        let soma = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
}