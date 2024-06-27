import { Response,Request } from "express"
import usercontroler from "./controllers/usercontroler"
import loginControler from "./controllers/loginControler"
import cors from "cors"
import { addFavorite, listFavorites, removeFavorite } from "./controllers/favorite.Controller"
const express = require('express')
const app = express()
const port = 1080

app.use(cors(
  {origin: 'http://localhost:3000'}
));
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

//rota de post
app.post('/cadastro', usercontroler.Cadastro);
app.post('/login', loginControler.login)
app.post('/favoritos', addFavorite);


//rotas get
app.get('/profile', loginControler.getProfile)
app.get('/favoritos', listFavorites);

//rotas de remove
app.delete('/favoritos/:id', removeFavorite);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
