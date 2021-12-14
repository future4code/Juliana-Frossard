import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolBar } from './styled';
import {goToRecipesList, goToLogin} from '../../routes/coordinator';
import {useNavigate} from 'react-router-dom';
import theme from '../../constants/theme'


const Header = ({rightButtonText,setRightButtonText}) => {
 const navigate = useNavigate()
 const token = localStorage.getItem("token")

 
 const logout = () =>{
     localStorage.removeItem("token")
 }
 const rightButtonAction = () => {
     if(token){
         logout()
         setRightButtonText("Login")
         goToLogin(navigate)
     }else {
        goToLogin(navigate)
     }
 }
    return (

        <AppBar position="static" theme={theme}>
            <StyledToolBar>
                <Button color="inherit" onClick={() =>goToRecipesList(navigate)}>Cookenu</Button>
                <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
            </StyledToolBar>
        </AppBar>

    );
}
export default Header;