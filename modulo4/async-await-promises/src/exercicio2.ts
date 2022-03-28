import axios from 'axios';
import { BASE_URL } from './base_url';


//EXERCICIO2
//a)
//b)
const getSubscribers = async (): Promise<[]> => {
    const result = await axios
        .get(`${BASE_URL}/subscribers`);
    return result.data
}
console.log(getSubscribers)