import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/img/logo.png';
import {LogoImg} from './styled'

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar color='secondary' position="static">
      <Toolbar>
          <LogoImg src={logo}/>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header;