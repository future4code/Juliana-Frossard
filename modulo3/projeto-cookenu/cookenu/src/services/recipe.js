import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createRecipe = (form, clear) => {
    axios.post(`${BASE_URL}/recipe`, form, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((response) => {
            alert(response.data.message)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

}