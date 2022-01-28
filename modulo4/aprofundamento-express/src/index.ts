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

//não funciona
app.get('/toDo', (req:Request, res:Response) => {
    const toDoList = toDo
    const trueList = []

    const list = toDoList.filter((item) => {
        if(item.completed === true){
            return (trueList.push({
                name: item.title,
                completed: item.completed
            }))
        }
   

   res.status(200).send(list)
    })
})

app.post('/create/', (req:Request, res:Response) => {
    const title = req.body.title
})