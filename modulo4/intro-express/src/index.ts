import express from "express";
import cors from 'cors';
import { info } from './users'
import { post } from "./posts";


const app = express();

app.use(cors());
app.use(express.json());

app.listen(3004, () => console.log("Servidor disponivel na porta 3004"))

app.get('/', (req, res) => {
  res.send("Hello Word Express")
})

app.get('/users', (req, res) => {
  const usersData = info

  const users = usersData.map((item) =>{
    return item
  })
  res.status(200).send(users)
})

app.get('/posts', (req, res) => {
  const postData = post

  const posts = postData.map((item) =>{
    return item
  })
    res.status(200).send(posts)
})

//nao funciona
app.get('/user/posts/:id', (req, res) => {
  const userID = req.params.id

  const posts = post.filter(item =>{
    if (item.userId === userID){
      return true
    } else {
      return false
    }
  })
  res.status(200).send(posts)
})


