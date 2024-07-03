import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Create User
app.post('/users', async (req, res) => {
  const { nome, email, senha, idade, estado, cidade } = req.body;
  try {
    const user = await prisma.user.create({
      data: { nome, email, senha, idade, estado, cidade },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user. Email might already exist.' });
  }
});

// Get User by Id
app.get('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
});

// Get User by Email
app.get('/users/email/:email', async (req, res) => {
  const userEmail = req.params.email;
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
});

// Get Users by Name (Partial match)
app.get('/users/name/:name', async (req, res) => {
  const userName = req.params.name;
  try {
    const users = await prisma.user.findMany({
      where: {
        nome: {
          contains: userName,
        },
      },
    });
    res.json(users);
  } catch (error) {
    res.status(404).json({ error: 'Users not found' });
  }
});

// Delete User by Id
app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    res.json(deletedUser);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
});

// Update User by Id
app.put('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { nome, email, senha, idade, estado, cidade } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { nome, email, senha, idade, estado, cidade },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Unable to update user. Email might already exist.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
