export type BankStatement = {
    balance: number,
    date: string[],
    description: string
}
export type Transition = {
    idTransition: string,
    name: string,
    CPF: string[],
    value: number,
    date?: string[]
}
export type Count = {
    id: string,
    name: string,
    CPF: string[],
    date: string[],
    balance: number,
    bankStatement?: BankStatement,
    transition?: Transition[],
}

export const users: Count[] = [
    {
        id: "1a",
        name: "Juliana",
        CPF: ["317.719.038.05"],
        date: ["28012022"],
        balance: 100,
        bankStatement: {
            balance: 100,
            date: ["28012022"],
            description: "saldo total"
        },
        transition: [
            {
                idTransition: "2b",
                name: "Juliana",
                CPF: ["317.719.038.05"],
                value: 10,
                date: ["01012022"]
            }
        ]
    },
    {
        id: "2a",
        name: "Amanda",
        CPF: ["387.759.038.06"],
        date: ["08012022"],
        balance: 1000,
        bankStatement: {
            balance: 10,
            date: ["26012022"],
            description: "valor final"
        },
        transition: [
            {
                idTransition: "2b",
                name: "Amanda",
                CPF: ["387.759.038.06"],
                value: 10,
                date: ["01012022"]
            }
        ]
    },

]

