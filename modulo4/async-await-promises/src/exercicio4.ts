import { Response } from 'express';
import axios from 'axios';
import { BASE_URL } from './base_url';

//EXERCICIO 4
//a) o endpoint correto é o put, 
//porque ele precisa receber um body mas nao precisa devolve um
//b)
type News = {
    title: string,
	content: string
	date: number
}

const createNews = async (): Promise<News> => {
    const result = await axios
        .put(`${BASE_URL}/news`)
        .then(res => res.data)
        .catch(err => console.log(err.response?.data))
    return result
}
console.log(createNews)
