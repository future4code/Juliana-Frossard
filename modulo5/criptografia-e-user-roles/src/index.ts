import app from "./app";
import singUp from "./endpoints/singUp";
import editUser from './endpoints/editUser';
import login from "./endpoints/login";
import userProfile from "./endpoints/userProfile";

app.post('/user/signup', singUp)
app.put('/user/edit/:id', editUser)
app.post('/user/login', login)
app.get('/user/profile', userProfile)
