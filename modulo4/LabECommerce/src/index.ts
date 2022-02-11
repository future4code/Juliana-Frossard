import app from './app';
import getAllProducts from './endpoints/products/getAllProducts';
import createUser from './endpoints/user/createUser';
import getAllUsers from './endpoints/user/getAllUsers'


app.post('/users', createUser)
app.get('/users', getAllUsers)
app.get('/products', getAllProducts)
