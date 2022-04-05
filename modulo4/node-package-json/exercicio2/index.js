const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])


const input = () =>{
    switch (process.argv[2]) {
        case "add":
            return number1 + number2
        case "sub":
            return number1 - number2
        case "mult":
            return number1 * number2
        case "div":
            return number1 / number2
    
    }
}


console.log(input())