import React from 'react'
import { goBackPage } from '../../routes/coordinaitor'
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { ScreenContainer} from '../../Global/GlobalStyled';
import { countries } from '../../constants/countries'
import useForm from '../../hooks/useForm';
import { Button, TextField, Typography, MenuItem, 
InputLabel,FormControl, Card, CardContent, Select} from '@mui/material';


const ApplicationFormPage = () => {
  const navigate = useNavigate()
   const trips = useRequestData([], `${BASE_URL}/trips`)
  const [form, onChange, clear] = useForm({ name: '', age: 0, 
  profession: '', aplicationText: '',contry:null, trip:null})

  const onSumbmit = (event) => {
    event.preventDrfault()
    console.log(form)
    clear()
  }
  
  return (
    <ScreenContainer>
      <Card>
        <CardContent onSumbmit={onSumbmit}>
          <Typography variant='h2' gutterBottom align='center' color="secondary">
            Inscrição           </Typography>
          <TextField label={"Nome do candidato"} variant={"outlined"} fullWidth
            required autoFocus margin='dense'
            onChange={onChange} name={"name"} value={form.name} />

          <TextField label={"Idade"} type={Number} variant={"outlined"} fullWidth
            required autoFocus margin='dense'
            onChange={onChange} name={"age"} value={form.age} />

          <TextField label={"Profissão"} variant={"outlined"} fullWidth
            required autoFocus margin='dense'
            onChange={onChange} name={"profession"} value={form.profession} />

          <TextField label={"Aplicação"} helperText="Descreva o motivo da sua candidatura"
            variant={"outlined"} fullWidth required autoFocus margin='dense'
            onChange={onChange} name={"aplicationText"} value={form.aplicationText} />

<FormControl sx={{ m: 1, minWidth: 120 }}
                variant={"outlined"} fullWidth required autoFocus margin='dense'
                onChange={onChange} name={"country"} value={form.country}        >
                <InputLabel >País</InputLabel>
                <Select                >
                    {countries.map((country) => {
                        return <MenuItem value={country} key={country}>{country}</MenuItem>
                    })}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}
                variant={"outlined"} fullWidth required autoFocus margin='dense'
                onChange={onChange} name={"trip"} value={form.trip}>
                <InputLabel >Viagem</InputLabel>
                <Select               >
                    {trips.map((trip) => {
                        return (<MenuItem value={trip.name} key={trip.id}>{trip.name}</MenuItem>)
                    })}
                </Select>
            </FormControl>

          <div>
            <Button
              type={'submit'} color={"primary"} variant={"contained"} margin={"dense"}
              size='medium' fullWidth
            >Enviar</Button>

            <Button
              type={'submit'} color={"primary"} margin={"dense"}
              size='medium' fullWidth
              onClick={() => goBackPage(navigate)}
            >Voltar </Button>
          </div>
        </CardContent>
      </Card>
    </ScreenContainer>
  )
}

export default ApplicationFormPage;