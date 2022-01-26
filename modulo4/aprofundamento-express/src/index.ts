import express, {Request, Response} from 'express';
import cors from 'cors'
import { toDo } from './data';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3004, () => console.log("Servidor disponivel na porta 3004"))

app.get('/ping', (req:Request, res:Response) => {
    res.send("pong")
})

app.get('/toDo', (req:Request, res:Response) => {
    const toDoList = toDo

    const list = toDoList.map((item) => {
        if(item.completed === true){
            return ({
                name: item.title,
                completed: item.completed
            })
        }
   res.send(list)
    })
})