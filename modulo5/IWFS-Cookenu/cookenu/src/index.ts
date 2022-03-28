import app from "./app";
import getOtherProfile from "./endpoints/User/getOtherProfile";
import getProfile from "./endpoints/User/getProfile";
import login from "./endpoints/User/login";
import postRecipe from "./endpoints/Recipe/postRecipe";
import signUp from "./endpoints/User/signUp";

app.post('/signup', signUp)
app.post('/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getOtherProfile)

app.post('/recipe', postRecipe)

