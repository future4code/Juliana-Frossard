type Info = {
    nome: string,
    nascimento: string
}
const allInfo = () => {
    const info:Info = {
        nome: "Juliana",
        nascimento: "28/10/1993"
    }
   const data = info.nascimento.split('/')
   
    
  
 }



// console.log(`Olá me chamo ${allInfo()}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}`)