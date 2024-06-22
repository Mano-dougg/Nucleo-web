import express from 'express';
import { userRouter } from './routes/userRoutes';

const app = express();

app.use(userRouter);

export default app;
