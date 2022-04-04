import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToAdminHomePage} from '../routes/coordinaitor'


export const login = (form, clear, navigate) => {
    axios.post(`${BASE_URL}/login`, form)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            clear()
            goToAdminHomePage(navigate)
        })
        .catch((err) => {
            console.log(err.response)
            alert("Erro ao fazer login.")
        })
}