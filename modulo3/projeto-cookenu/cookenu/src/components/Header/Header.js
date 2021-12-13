import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolBar } from './styled';
import {goToRecipesList, goToLogin} from '../../routes/coordinator';
import {useNavigate} from 'react-router-dom';


const Header = () => {
 const navigate = useNavigate()
    return (

        <AppBar position="static">
            <StyledToolBar>
                <Button color="inherit" onClick={() =>goToRecipesList(navigate)}>Cookenu</Button>
                <Button color="inherit" onClick={() =>goToLogin(navigate)}>Login</Button>
            </StyledToolBar>
        </AppBar>

    );
}
export default Header;