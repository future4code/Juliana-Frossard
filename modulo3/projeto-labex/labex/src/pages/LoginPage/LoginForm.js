import React from 'react'
import { InputsContainer } from './styled'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import { login } from '../../services/requests'
import { useNavigate } from 'react-router-dom'
import { goToAdminHomePage } from '../../routes/coordinaitor'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'


const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate)
    
  }
  
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          label={"E-mail"} variant={"filled"} fullWidth focused required
          type={"e-mail"} margin={"dense"}
          name={"email"} value={form.email} onChange={onChange} />

        <TextField
          label={"Senha"} variant={"filled"} fullWidth required focused
          type={"password"} margin={"dense"}
          name={"password"} value={form.password} onChange={onChange} />

        <Button
          type={'submit'} color={"primary"} variant={"contained"} 
          margin={"dense"}           fullWidth
          >Entrar</Button>
      </form>

    </InputsContainer>

  )
}

export default LoginForm;