import { getProductByName } from './controller/getIdNameTag/getProductByName';
import { getProductByData } from './controller/getProductByData';
import { getProductById } from './controller/getIdNameTag/getProductById';
import { app } from "./app";
import { createProduct } from "./controller/createProduct";
import { getProductByTag } from './controller/getIdNameTag/getProductByTag';

app.post('/products',createProduct)
app.get('/products/id', getProductById)
app.get('/products/name', getProductByName)
app.get('/products/tag', getProductByTag)
app.get('/products/search', getProductByData)
