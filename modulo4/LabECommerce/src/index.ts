import app from './app';
import createUser from './endpoints/user/createUser';
import getAllUsers from './endpoints/user/getAllUsers'
import createProducts from './endpoints/products/createProducts';
import getAllProducts from './endpoints/products/getAllProducts';
import getUserPurchases from './endpoints/user/getUserPurchases';

app.post('/users', createUser)
app.get('/users', getAllUsers)

app.post('/products', createProducts)
app.get('/products', getAllProducts)

app.get('/users/:user_id/purchases', getUserPurchases)
