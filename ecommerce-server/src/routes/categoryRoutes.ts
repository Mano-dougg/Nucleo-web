import { Router } from 'express';
import { CategoryCreateInputSchema, CategoryUpdateInputSchema } from '../../prisma/generated/zod/index';
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  listCategories,
  updateCategory,
} from '../controller/categoryController';
import { validateSchema } from '../middleware/validateSchema';

const categoryRouter = Router();

categoryRouter.post('/', validateSchema(CategoryCreateInputSchema), createCategory);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.get('/', listCategories);
categoryRouter.put('/:id', validateSchema(CategoryUpdateInputSchema), updateCategory);
categoryRouter.delete('/', deleteCategory);

export default categoryRouter;
