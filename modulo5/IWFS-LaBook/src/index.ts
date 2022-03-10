import { getAllUsers } from './controller/user/getAllUsers';
import { signup } from './controller/user/signup';
import { app } from "./controller/app";
import { login } from './controller/user/login';


app.get('/user', getAllUsers)
app.post('/user/signup',signup)
app.post('user/login', login)
