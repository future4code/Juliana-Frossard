import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getResultID = async (id) => {
const response = await axios
.get(`${BASE_URL}/concursos/${id}`)

};

export default getResultID;