import {Request, Response} from "express"


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: Request, res:Response) => {
    return res.send( { message :'Helo world!'})

   })

app.get('/teste', (req: Request, res:Response) => {
 return res.send('teste!')

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
