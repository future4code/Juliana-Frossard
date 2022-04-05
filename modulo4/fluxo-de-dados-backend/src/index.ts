import express, { application, Request, Response } from "express";
import cors from 'cors';
import { AddressInfo } from 'net';
import { Product, products } from './data'

const app = express()

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3006, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/test", (req: Request, res: Response) => {
    res.send("Teste funcionando")
})

app.post('/products', (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Faltam dados (name e/ou price)");
        }
        if (typeof name != "string" || typeof price != "number") {
            throw new Error("Valor(es) passado(s) errado(s)");
        }
        if (price <= 0) {
            throw new Error("O preço tem que ser maior do que zero");

        }
        const newProducts: Product = {
            id: Math.floor(Date.now() * Math.random()).toString(),
            name,
            price
        }
        products.push(newProducts)

        res.send(products)

    } catch (error: any) {
        switch (error.message) {
            case "Faltam dados (name e/ou price)":
                res.status(400)
                break;
            case "Valor(es) passado(s) errado(s)":
                res.status(400)
                break;
            case "O preço tem que ser maior do que zero":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }


})

app.get('/products', (req: Request, res: Response) => {
    try {
        res.send(products)
    } catch (error) {
        res.status(400).send("Erro ao buscar produtos")
    }
})

app.put('/products/:id', (req: Request, res: Response) => {
    try {
        const idProduct = req.params.id
        const newPrice = req.body.price

        if (!newPrice && newPrice !== 0) {
            throw new Error("Preço inválido");
        }
        if (typeof newPrice != "number") {
            throw new Error("Preço não é um número válido");
        }

        let productFound = false

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === idProduct) {
                products[i].price = newPrice
                productFound = true
            }
        }
        if (!productFound) {
            throw new Error("Produto não encontrado");
        }
        res.send(products)

    } catch (error: any) {
        switch (error.message) {
            case "Preço inválido":
                res.status(400)
                break;
            case "Produto não encontrado":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})

app.delete('/products/:id', (req: Request, res: Response) => {
    try {
        const idProduct = req.params.id

        let productsFound = false

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === idProduct) {
                products.splice(i, 1)
                productsFound = true
            }
        }
        if (!productsFound) {
            throw new Error("Produto não encontrado");
        }
        res.send(products)

    } catch (error: any) {
        switch (error.message) {
            case "Produto não encontrado":
                res.status(400)
                break;
            default:
                res.status(500)
                break;
        }
        res.send(error.message)
    }
})