import { Router } from 'express';
import userRouter from './userRoutes';
import productRouter from './productRoutes';

const router = Router();

router.use('/user', userRouter);
router.use('/product', productRouter);

export default router;
