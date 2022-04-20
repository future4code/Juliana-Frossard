import { createTheme } from '@mui/material/styles';
import {primaryColor, secundaryColor, neutralColor} from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: secundaryColor,
    },
    text: {
        primary: neutralColor
    }
  },
});

export default theme;