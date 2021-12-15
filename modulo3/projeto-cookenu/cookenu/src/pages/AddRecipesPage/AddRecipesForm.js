import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import useForm from '../../hooks/useForm'
import { createRecipe } from '../../services/recipe'


const AddRecipesForm = () => {
    
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
    }
    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <div>
                    <TextField
                        onChange={onChange}
                        name={"title"}
                        value={form.title}
                        label={"Título"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin='normal'
                    />
                    <TextField
                        onChange={onChange}
                        name={"description"}
                        value={form.description}
                        label={"Descrição"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin='normal'
                    />
                    <TextField
                        onChange={onChange}
                        name={"image"}
                        value={form.image}
                        label={"Foto"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin='normal'
                    />

                </div>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin="normal"
                >Adicionar Receita</Button>
            </div>
        </form>
    )
}

export default AddRecipesForm;