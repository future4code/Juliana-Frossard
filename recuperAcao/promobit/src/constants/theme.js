import { createTheme } from '@mui/material/styles';
import {baseColor, neutralColor,textColor,secondaryColor} from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: baseColor,
            contrastText: neutralColor
        },
        secondary: {
            main: secondaryColor,
            contrastText: neutralColor
        },
        tertiary: {
            main: neutralColor,
            contrastText: textColor
        },
        text: {
            primary: textColor,
            secondary:neutralColor
        }
      }
    })
export default theme;    