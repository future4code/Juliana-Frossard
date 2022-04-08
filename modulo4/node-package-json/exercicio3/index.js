const list = ["fritar ovo", "beber água"]
const input = process.argv[2]
const result = list.push(input)

console.log(`Tarefa adicionada com sucesso!`)
console.table(list)
