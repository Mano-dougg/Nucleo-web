import express from 'express'
import { router } from "./Routes/routes";
require('dotenv').config();

const app = express()
const port = 3000

app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})