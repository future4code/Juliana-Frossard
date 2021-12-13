import React from "react";
import { InputsContainer, LogoImg, ScreenContainer } from './styled'
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    console.log(form)
    const onSubmitForm = (event) => {
        event.preventDefault()
    }
    return (
        <ScreenContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        margin="normal"
                        type={"email"}
                        fullWidth />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin="normal"
                        type={"password"}
                        fullWidth
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >Entrar</Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default LoginForm;