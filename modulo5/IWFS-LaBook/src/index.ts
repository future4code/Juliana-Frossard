import {getUserByEmail } from './controller/user/getUserByEmail';
import { getAllPost } from './controller/post/getAllPost';
import { createPost } from './controller/post/createPost';
import { getAllUsers } from './controller/user/getAllUsers';
import { signup } from './controller/user/signup';
import { app } from "./controller/app";
import { login } from './controller/user/login';


app.get('/user', getAllUsers)
app.post('/user/signup',signup)
app.post('user/login', login)
app.get('/user/email', getUserByEmail)

app.get('/user/post', getAllPost)
app.post('/user/post', createPost)
