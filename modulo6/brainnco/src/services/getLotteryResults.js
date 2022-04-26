import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

//pegar concursos 
export const getLotteryResults = (setData) => {

    axios.get(`${BASE_URL}/loterias-concursos`)
        .then((resp) => {
            setData(resp.data)
        })
        .catch((err) => {
            console.log(err.message)
            window.alert('Ocorreu um erro, tente novamente')
        })
}


