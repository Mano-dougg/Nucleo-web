import { configDotenv } from "dotenv";
import { Request, Response } from "express";

configDotenv();
const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})