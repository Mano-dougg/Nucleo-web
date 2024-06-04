import express, { Request, Response } from "express"


const app = express()
const port = 3000

app.
get('/teste', (req: Request, res: Response) => {
    console.log(req.params)
   res.send ({
       teste: 'Hello!'
   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
