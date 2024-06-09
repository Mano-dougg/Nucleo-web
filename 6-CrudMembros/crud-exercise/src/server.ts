import express, { Request, Response } from "express";

const app = express();
// Use the PORT environment variable if present in .env
const port = Number(process.env.EXPRESS_PORT) || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Initial route.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
