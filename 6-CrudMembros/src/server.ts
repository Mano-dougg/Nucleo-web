import express, { Request, Response } from "express";
import UserController from "./controllers/UserController";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send({ message: 'Hello world!' });
});

app.post('/createUser', UserController.createUser);

app.get('/teste', (req: Request, res: Response) => {
    return res.send('teste!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
