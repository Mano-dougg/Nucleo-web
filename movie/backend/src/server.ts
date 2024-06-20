import { Response,Request } from "express"
import usercontroler from "./controllers/usercontroler"
const express = require('express')
const app = express()
const port = 1080

app.use(express.json());

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

//rota de post
app.post('/cadastro', usercontroler.Cadastro);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
