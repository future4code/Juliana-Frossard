import { GENDER } from './enuns'


export type Movie = {
    id: number,
    title: string,
    year: number
}

export type Character = {
    id: number,
    name: string,
    gender: GENDER,
    description?: string
}