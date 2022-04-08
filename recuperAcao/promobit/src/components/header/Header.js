import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/img/logo.png';
import { LogoImg, ButtonHeader } from './styled'
import { goToMainPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='secondary' position="static">
        <Toolbar>
          <ButtonHeader onclick={() => goToMainPage(navigate)}>
            <LogoImg src={logo} />
          </ButtonHeader>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;