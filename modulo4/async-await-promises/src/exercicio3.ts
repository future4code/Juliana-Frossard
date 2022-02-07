import axios from 'axios';
import { BASE_URL } from './base_url';

export type user = {
    id: string;
    name: string;
    email: string;
}

//EXERCICIO 3
//a) haverá um erro, pois a resposta não estará no formato do TYPE
//b)é uma boa prática sim, pois especificamos exatamente o que queremos receber e o formato
//c)exercicio 1
async function getSubscriberS(): Promise<user[]> {
    const result = await axios
        .get(`${BASE_URL}/subscribers`);
    return result.data.map((item: any) => {
        return ({
            id: item.id,
            name: item.name,
            email: item.email
        })
    })
};

//exercicio 2

const getSubscribers = async (): Promise<user[]> => {
    const result = await axios
        .get(`${BASE_URL}/subscribers`);
    return result.data.map((item: any) => {
        return ({
            id: item.id,
            name: item.name,
            email: item.email
        })
    })
}

