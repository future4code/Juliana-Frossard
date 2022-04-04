export type Transaction = {
    value: number,
    date: Date,
    description: string
}
export type UserAccount = {
    name: string,
    cpf: string,
    dataOfBirth: Date,
    balance: number,
    statement: Transaction[]
}