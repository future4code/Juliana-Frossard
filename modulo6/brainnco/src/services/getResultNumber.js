import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getResultNumber = async (id) => {
    const data = await axios
        .get(`${BASE_URL}/concursos/${id}`)

    return data;

};

export default getResultNumber;