import express from 'express';
import userRouter from './routes/user.router'

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/users', userRouter);

app.get('/ping',(req, res) => {
    res.json({message: 'pong'}).status(200)
});


app.listen(port, () => {
    console.log(`Servidor rodando em : ${port}`)
})