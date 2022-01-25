import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import { StyledToolbar } from './styled'
import { goToHomePage, goToLoginPage } from '../../routes/coordinaitor'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <AppBar position="static" border="none">
            <StyledToolbar>
               
                    <Button color="inherit" onClick={() => goToHomePage(navigate)}><HomeIcon /></Button>
                    <Button color="inherit" onClick={() => goToLoginPage(navigate)}><LoginIcon /></Button>
                
            </StyledToolbar>
        </AppBar>
    );
}
export default Header;