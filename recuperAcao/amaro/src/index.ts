import { app } from "./controller/app";
import { createProduct } from "./controller/products/createProduct";

app.post('/products',createProduct)