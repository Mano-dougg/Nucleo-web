import express from 'express'
import { router } from "./Routers/routes";
require('dotenv').config();

const cors = require('cors')
const app = express()
const port = 3030

app.use(express.json());
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
