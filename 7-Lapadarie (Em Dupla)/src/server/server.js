import Handlers, { getStats, getQueue, getSales, addSale, removePerson } from "./handlers"
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get('/api/get-stats', getStats);

app.get('/api/get-queue', getQueue);

app.get('/api/get-sales', getSales);

app.post('/api/add-sale', addSale);

app.patch('/api/del-person/:id', removePerson);


app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});