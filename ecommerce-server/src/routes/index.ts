import { Router } from 'express';
import userRouter from './userRoutes';
import productRouter from './productRoutes';
import categoryRouter from './categoryRoutes';

const router = Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);

export default router;
