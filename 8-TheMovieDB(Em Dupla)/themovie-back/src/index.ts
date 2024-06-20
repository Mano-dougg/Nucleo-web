import express from "express";

var cors = require('cors')

const app = express()

const port = 4004

app.use(express.json())

app.use(cors());

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
});
