import express, { Request, Response } from 'express';
const app = express();
const port = 1080;

app.get('/', (req: Request, res: Response<any>) => {
  res.json('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
