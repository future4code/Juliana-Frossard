import axios from 'axios';
import { BASE_URL } from './base_url';


//EXERCICIO 1
//a) para pegar dados da api utiliza-se o get
//b)indicamos com async e await com a tipagem []
//c)
async function getSubscribers(): Promise<[]> {
    const result = await axios
    .get(`${BASE_URL}/subscribers`);
    return result.data;
  };
  console.log(getSubscribers)