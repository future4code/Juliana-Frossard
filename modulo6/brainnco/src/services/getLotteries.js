import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

//buscar loterias
export const getLotteries = (setData) =>{
    
    axios.get(`${BASE_URL}/loterias`)
   .then((res) =>{
        setData(res.data)
    })
    .catch((err) => {
        console.log(err.response.data)
        window.alert('Ocorreu um erro, tente novamente')
    })
}