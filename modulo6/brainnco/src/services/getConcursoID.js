import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL'

const getConcursoID = (id) => {
const response = axios.get(`${BASE_URL}/concursos/${id}`)

};

export default getConcursoID;