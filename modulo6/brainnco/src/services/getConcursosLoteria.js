import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getConcursosLoteria = () => {
    const response = axios
    .get(`${BASE_URL}/loterias-concursos`)
    
    return response.data
};

export default getConcursosLoteria;