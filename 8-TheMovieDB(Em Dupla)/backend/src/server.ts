import app from './app.js';

const PORT = process.env.EXPRESS_PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default server;
