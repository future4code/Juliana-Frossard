import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getLoteria = () => {
    const response = axios
    .get(`${BASE_URL}/loterias`)
    
    return response.data
};

export default getLoteria;