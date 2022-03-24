import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getResultLotery = async() => {
    const response = await axios
    .get(`${BASE_URL}/loterias-concursos`)
    
    return response.data
};

export default getResultLotery;