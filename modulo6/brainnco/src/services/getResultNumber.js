import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

//pegar um concurso especifico com o id da loteria
export const getResultNumber = (setData, id) => {

    axios.get(`${BASE_URL}/concursos/${id}`)
        .then((resp) => {
            setData(resp.data.numeros)
        })
        .catch((err) => {
            console.log(err.message)
            window.alert('Ocorreu um erro, tente novamente')
        })
};

export const getDateResult = async(id) => {
    await axios.get(`${BASE_URL}/concursos/${id}`)
}


