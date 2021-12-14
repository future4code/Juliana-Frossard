import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator'

export const login = (form, clear, navigate, setRightButtonText) => {

    axios.post(`${BASE_URL}/user/login`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const singUp = (form, clear, navigate, setRightButtonText) => {
    axios.post(`${ BASE_URL }/user/signup`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}