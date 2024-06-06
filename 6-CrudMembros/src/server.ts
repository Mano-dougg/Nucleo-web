import express, { Request, Response } from "express";
import UserController from "./controllers/UserController";
import PostControler from "./controllers/PostControler";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send({ message: 'Local host : 3000' });
});


app.get('/user/:id', UserController.getUserById);
app.get('/user/email/:email', UserController.getUserByEmail);



app.get('/createUser/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
