import { Response,Request } from "express"
import usercontroler from "./controllers/usercontroler"
import loginControler from "./controllers/loginControler"
import cors from "cors"
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


//rotas get
app.get('/profile', loginControler.getProfile)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
