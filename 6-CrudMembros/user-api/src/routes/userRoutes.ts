import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { createUser, getUserById, getUserByEmail, getUsersByName, updateUserById, deleteUserById } from '../controllers/userController';

const router = Router();

router.post('/users', createUser);
router.get('/users/:id', authenticate, getUserById);
router.get('/users/email/:email', authenticate, getUserByEmail);
router.get('/users/name/:name', authenticate, getUsersByName);
router.put('/users/:id', authenticate, updateUserById);
router.delete('/users/:id', authenticate, deleteUserById);

export default router;
