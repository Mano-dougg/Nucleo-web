import express, { Request, Response } from "express";
import usersRouter from "./routes/users/UsersRoutes";

const app = express();
// Use the PORT environment variable if present in .env
const port = Number(process.env.EXPRESS_PORT) || 3000;

app.use(express.json());

app.use(usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
