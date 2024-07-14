import { Router } from 'express';
import userRouter from './userRoutes';
import productRouter from './productRoutes';
import categoryRouter from './categoryRoutes';
import tagRouter from './tagRoutes';

const router = Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/tag', tagRouter);

export default router;
